package br.com.delta.students;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.delta.ListWrapper;

@RestController
@RequestMapping("/v1/students")
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;
	
	@GetMapping
	public ResponseEntity<ListWrapper<Student>> list() {
		ListWrapper<Student> wrapper = new ListWrapper<Student>(studentRepository.findAll());
		return ResponseEntity.ok(wrapper);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Student> get(@PathVariable(value = "id") Long id) {
		Student student = studentRepository.findById(id).get();
		return ResponseEntity.ok(student);
	}

	@PostMapping
	public ResponseEntity<Student> save(@RequestBody Student student) {
		return ResponseEntity.ok(studentRepository.save(student));
	}
}
