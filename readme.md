The idea is to use nested proxy. So the outer proxy defines interfaces of the API and inner proxy defines methods from a particular interface.

Declaration files are defined to treat root object and interface proxy as namespaces. They are also used to define method's arguments and return types, so methods are essentially async functions
