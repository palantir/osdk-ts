import{r as T,j as i}from"./iframe-B8G1jItW.js";import{O as C}from"./object-table-k-UfENXm.js";import{E as m}from"./Employee-BAk2o20h.js";import{f as A,o as W,T as c,r as g}from"./objectTableStoryHelpers-CA6pUMU9.js";import"./preload-helper-B1IURV7o.js";import"./Table-BwElsE2a.js";import"./index-DB13g_6W.js";import"./Dialog-CsnA13_u.js";import"./cross-CZEt4CQ9.js";import"./svgIconContainer-CB3cR2O2.js";import"./useBaseUiId-S4IVgEx3.js";import"./InternalBackdrop-C20G---M.js";import"./composite-DlSXVEG5.js";import"./index-ad9AYhfW.js";import"./index-COXmaWmi.js";import"./index-HEN-Pfmt.js";import"./useEventCallback-sCqLMStA.js";import"./SkeletonBar-DP27X8f1.js";import"./LoadingCell-8me7lGG_.js";import"./ColumnConfigDialog-BK8EX9Ja.js";import"./DraggableList-CKwGoZCZ.js";import"./search-GKgaZqTV.js";import"./Input-D7bf_syM.js";import"./useControlled-Bxr4Vh5_.js";import"./Button-Bq6MDfzu.js";import"./small-cross-DqO0yT6m.js";import"./ActionButton-avzkQ9at.js";import"./Checkbox-BTIiX3dV.js";import"./useValueChanged-DNSQAzpI.js";import"./CollapsiblePanel-Dh2wBANq.js";import"./MultiColumnSortDialog-Dw3NJlo9.js";import"./MenuTrigger-jLSwLtFH.js";import"./CompositeItem-DppqfLhH.js";import"./ToolbarRootContext-DNpt4PCI.js";import"./getDisabledMountTransitionStyles-BSxcypJ-.js";import"./getPseudoElementBounds-F1Xvk9J_.js";import"./chevron-down-CSSbm5fQ.js";import"./index-w8Xrn1oV.js";import"./error-BcGqswAb.js";import"./BaseCbacBanner-B1FxIqOJ.js";import"./makeExternalStore-ByyfvAII.js";import"./Tooltip-BSwHpWu9.js";import"./PopoverPopup-B695G3fz.js";import"./debounce-OG7_ZmsP.js";import"./useOsdkClient-DBY3KNGZ.js";import"./tick-Bs7VXaZc.js";import"./DropdownField-lFeyoiMB.js";import"./isEqual-BL8MlQOH.js";import"./withOsdkMetrics-Bg8xFEho.js";const{expect:o,fireEvent:D,fn:h,screen:u,userEvent:n,waitFor:d,within:l}=__STORYBOOK_MODULE_TEST__,Ie={...W,title:"Components/ObjectTable/Features/Editing"},f={args:{objectType:m,columnDefinitions:A,editMode:"manual",onCellValueChanged:h()},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Software Engineer",
          "Senior Software Engineer",
          "Staff Engineer",
          "Engineering Manager",
          "Product Manager",
          "Designer",
        ],
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      }),
    },
  },
  // Example where the field is inferred from datatype
  {
    locator: { type: "property", id: "firstInternStartDate" },
    editable: true,
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DATE_PICKER",
      getFieldComponentProps: () => ({
        showTime: false,
        placeholder: "Select date...",
      }),
    },
  },
  // Boolean dropdown example
  {
    locator: { type: "property", id: "isRemote" },
    renderCell: (object) => {
      if (object.isRemote == null) {
        return "No Value";
      }
      return object.isRemote ? "Yes" : "No";
    },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [true, false],
        itemToStringLabel: (item: boolean | undefined) =>
          item === false ? "No" : item === true ? "Yes" : "No Value",
      }),
    },
  },
  // Custom columns: getCellValue supplies the value, cellValueType picks the editor
  {
    locator: { type: "custom", id: "reportsTo" },
    columnName: "Reports To (#)",
    getCellValue: (employee) =>
      employee.leadEmployeeNumber ?? employee.mentorEmployeeNumber,
    cellValueType: "integer",
    editable: true,
    orderable: false,
  },
  {
    locator: { type: "custom", id: "contact" },
    columnName: "Contact",
    getCellValue: (employee) =>
      [employee.emailPrimaryWork, employee.jobTitle]
        .filter((part) => part != null)
        .join(" · "),
    cellValueType: "string",
    editable: true,
    orderable: false,
    renderCell: (object, locator, value) => <em>{value || "No value"}</em>,
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="manual"
  />
);`}}},render:e=>{const[t,a]=T.useState(),p=T.useCallback(r=>{var s;(s=e.onCellValueChanged)==null||s.call(e,r),a(r)},[e]);return i.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[i.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'Try changing showEditFooter to false to hide the edit footer bar. Change edit mode to "manual" to enable inline editing with an Edit Table button.'}),t!=null&&i.jsxs("div",{style:{padding:"12px",backgroundColor:"#d1ecf1",marginBottom:"8px",borderRadius:"4px",fontFamily:"monospace",fontSize:"13px"},children:[i.jsx("strong",{children:"Last cell edit:"}),' Column "',t.columnId,'" changed from "',String(t.oldValue),'" to "',String(t.newValue),'"']}),i.jsx(C,{...e,onCellValueChanged:p})]})},play:async({canvasElement:e,args:t})=>{const a=l(e);await a.findByText(c),await n.click(a.getByRole("button",{name:"Edit Table"}));const p=a.getAllByRole("row")[1],r=()=>l(p).getAllByRole("cell"),s=l(r()[0]).getByRole("textbox");await n.click(s),await n.clear(s),await n.type(s,"Ahmed Williamson"),await n.tab(),await d(()=>o(t.onCellValueChanged).toHaveBeenCalledWith(o.objectContaining({columnId:"fullName",newValue:"Ahmed Williamson"})));const y=await l(r()[3]).findByRole("combobox");await n.click(y),await n.click(await u.findByRole("option",{name:"Engineering"})),await d(()=>o(t.onCellValueChanged).toHaveBeenCalledWith(o.objectContaining({columnId:"department",newValue:"Engineering"})));const M=l(r()[5]).getByRole("combobox");await n.click(M),await n.click(await u.findByRole("button",{name:"Today"})),await d(()=>o(t.onCellValueChanged).toHaveBeenCalledWith(o.objectContaining({columnId:"firstFullTimeStartDate"})));const b=l(r()[7]).getByRole("spinbutton");await o(b).toHaveAttribute("type","number"),await n.click(b),await n.clear(b),await n.type(b,"4242"),await n.tab(),await d(()=>o(t.onCellValueChanged).toHaveBeenCalledWith(o.objectContaining({columnId:"reportsTo",newValue:4242}))),await o(l(r()[8]).getByRole("textbox")).toHaveAttribute("type","text"),await n.click(a.getByRole("button",{name:"Cancel"})),await o(await a.findByRole("button",{name:"Edit Table"})).toBeInTheDocument()}},w={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0,validateEdit:async e=>String(e??"").trim().length>=2?void 0:"Name must be at least 2 characters long"},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0,validateEdit:async e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(String(e??""))?void 0:"Please enter a valid email address"},{locator:{type:"property",id:"employeeNumber"},editable:!0,validateEdit:async e=>Number(e)>0?void 0:"Employee number must be positive"},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"})},validateEdit:async e=>e?void 0:"Job title is required"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]})}},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",getFieldComponentProps:()=>({showTime:!1,placeholder:"Select date..."})},validateEdit:async e=>{if(!e||isNaN(Date.parse(e)))return"Please enter a valid date";const t=new Date(e),a=new Date;if(a.setHours(0,0,0,0),t<a)return"Date cannot be before today"}}],editMode:"always",onSubmitEdits:h(async e=>!0)},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
    validateEdit: async (value: string) => {
      return value.trim().length >= 2 ? undefined : "Name must be at least 2 characters long";
    },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
    validateEdit: async (value: string) => {
      const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
      return emailRegex.test(value) ? undefined : "Please enter a valid email address";
    },
  },
  {
    locator: { type: "property", id: "employeeNumber" },
    editable: true,
    validateEdit: async (value: number) => {
      return value > 0 ? undefined : "Employee number must be positive";
    },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Software Engineer",
          "Senior Software Engineer",
          "Staff Engineer",
          "Engineering Manager",
          "Product Manager",
          "Designer",
        ],
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
    },
    validateEdit: async (value: unknown) => {
      return value ? undefined : "Job title is required";
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      }),
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="always"
    onSubmitEdits={async (edits) => {
      return true;
    }}
  />
);`}}},render:e=>i.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[i.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:["Try editing cells with invalid values to see validation in action:",i.jsxs("ul",{style:{margin:"8px 0 0 20px"},children:[i.jsx("li",{children:"Name must be at least 2 characters"}),i.jsx("li",{children:"Email must be a valid format"}),i.jsx("li",{children:"Employee number must be positive"}),i.jsx("li",{children:"Job title is required"}),i.jsx("li",{children:"Start date is required"})]})]}),i.jsx(C,{...e,objectType:m})]}),play:async({canvasElement:e})=>{const t=l(e),a=await t.findByDisplayValue(c);await n.click(a),await n.clear(a),await n.type(a,"a"),await n.tab(),await d(()=>o(t.getByText("Validation error")).toBeInTheDocument()),await o(t.getByRole("button",{name:"Submit Edits"})).toBeDisabled(),await n.click(a),await n.clear(a),await n.type(a,"Valid Name"),await n.tab(),await d(()=>o(t.queryByText("Validation error")).not.toBeInTheDocument()),await o(t.getByRole("button",{name:"Submit Edits"})).toBeEnabled(),await n.click(a),await n.clear(a),await n.type(a,c),await n.tab(),await d(()=>o(t.getByDisplayValue(c)).toBeInTheDocument())}},E={args:{objectType:m,columnDefinitions:A,editMode:"manual",onSubmitEdits:h(async e=>(await new Promise(t=>setTimeout(t,1e3)),!0))},parameters:{docs:{source:{code:`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Software Engineer",
          "Senior Software Engineer",
          "Staff Engineer",
          "Engineering Manager",
          "Product Manager",
          "Designer",
        ],
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      }),
    },
  },
  {
    locator: { type: "property", id: "firstInternStartDate" },
    editable: true,
    renderCell: (object) => (
      <div>
        {object.firstInternStartDate
          ? new Date(object.firstInternStartDate).toISOString()
          : "No value"}
      </div>
    ),
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DATE_PICKER",
      getFieldComponentProps: () => ({
        showTime: false,
        placeholder: "Select date...",
      }),
    },
  },
  // Boolean dropdown example
  {
    locator: { type: "property", id: "isRemote" },
    renderCell: (object) => {
      if (object.isRemote == null) {
        return "No Value";
      }
      return object.isRemote ? "Yes" : "No";
    },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [true, false],
        itemToStringLabel: (item: boolean | undefined) =>
          item === false ? "No" : item === true ? "Yes" : "No Value",
      }),
    },
  },
  // Custom columns: getCellValue supplies the value, cellValueType picks the editor
  {
    locator: { type: "custom", id: "reportsTo" },
    columnName: "Reports To (#)",
    getCellValue: (employee) =>
      employee.leadEmployeeNumber ?? employee.mentorEmployeeNumber,
    cellValueType: "integer",
    editable: true,
    orderable: false,
  },
  {
    locator: { type: "custom", id: "contact" },
    columnName: "Contact",
    getCellValue: (employee) =>
      [employee.emailPrimaryWork, employee.jobTitle]
        .filter((part) => part != null)
        .join(" · "),
    cellValueType: "string",
    editable: true,
    orderable: false,
    renderCell: (object, locator, value) => <em>{value || "No value"}</em>,
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="manual"
    onCellValueChanged={(info) => {
      console.log("Cell value changed:", info);
    }}
    onSubmitEdits={async (edits) => {
      // Call your API or action here
      await submitEmployeeUpdates(edits);
      // Return true to indicate success and clear edits
      return true;
    }}
  />
);`}}},render:e=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(C,{...e,objectType:m})}),play:async({canvasElement:e,args:t})=>{const a=l(e);await a.findByText(c),await n.click(a.getByRole("button",{name:"Edit Table"}));const p=a.getAllByRole("row")[1],r=l(p).getAllByRole("cell")[0],s=l(r).getByRole("textbox");await n.click(s),await n.clear(s),await n.type(s,"Ahmed Williamson"),await n.tab();const y=a.getByRole("button",{name:"Submit Edits"});await d(()=>o(y).toBeEnabled()),await n.click(y),await d(()=>o(t.onSubmitEdits).toHaveBeenCalled()),await d(()=>o(a.getByRole("button",{name:"Edit Table"})).toBeInTheDocument(),{timeout:5e3})}},v={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"},editable:e=>(e.jobTitle??"")==="Senior Product Manager",cellValueType:"string",renderCell:(e,t,a)=>i.jsx("div",{style:{fontStyle:"italic",color:"grey"},children:typeof a=="string"?a:""})},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:e=>({items:e.department==="Operations"?["Sales","Marketing"]:["Sales","Marketing","Finance","Human Resources"]})}}],editMode:"always",onCellValueChanged:h()},parameters:{docs:{description:{story:"Demonstrates per-row configuration with `editable` as a predicate function and dynamic `getFieldComponentProps` that computes dropdown items from the row's data. jobTitle is only editable for 'Senior Product Manager' rows. Department uses a dropdown that shows only 2 options for Operations rows"},source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: { type: "property", id: "jobTitle" },
    // Only allow editing for Senior Product Manager
    editable: (rowData: Osdk.Instance<Employee>) => {
      const jobTitle = rowData.jobTitle ?? "";
      return jobTitle === "Senior Product Manager";
    },
    cellValueType: "string",
    renderCell: (_obj, _locator, value) => (
      <div
        style={{
          fontStyle: "italic",
          color: "grey",
        }}
      >
        {typeof value === "string" ? value : ""}
      </div>
    ),
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      // Dropdown items depend on the row's current department
      getFieldComponentProps: (employee) => ({
        items: employee.department === "Engineering"
          ? ["Engineering", "Product", "Design"]
          : ["Sales", "Marketing", "Finance", "Human Resources"],
      }),
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="always"
  />
);`}}},render:e=>i.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[i.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'JobTitle is only editable for "Senior Product Manager" rows. Department dropdown shows only 2 options for Operations rows.'}),i.jsx(C,{...e})]}),play:async({canvasElement:e})=>{const t=l(e);await t.findByText(c);const a=l(g(t.getByText("Margaret Jackson"))).getAllByRole("cell");await o(a[1]).toHaveAttribute("data-editable","true");const p=l(g(t.getByText(c))).getAllByRole("cell");await o(p[1]).not.toHaveAttribute("data-editable");const r=g(t.getByText("William Liu"));await n.click(t.getByText("William Liu")),D.click(await l(r).findByRole("combobox")),await o(await u.findAllByRole("option")).toHaveLength(2),await o(u.queryByRole("option",{name:"Finance"})).not.toBeInTheDocument(),await n.keyboard("{Escape}");const s=g(t.getByText(c));await n.click(t.getByText(c)),D.click(await l(s).findByRole("combobox")),await o(await u.findByRole("option",{name:"Finance"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await d(()=>o(u.queryByRole("option",{name:"Finance"})).not.toBeInTheDocument())}};var x,R,S;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: editableColumnDefinitions,
    editMode: "manual" as const,
    onCellValueChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Software Engineer",
          "Senior Software Engineer",
          "Staff Engineer",
          "Engineering Manager",
          "Product Manager",
          "Designer",
        ],
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      }),
    },
  },
  // Example where the field is inferred from datatype
  {
    locator: { type: "property", id: "firstInternStartDate" },
    editable: true,
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DATE_PICKER",
      getFieldComponentProps: () => ({
        showTime: false,
        placeholder: "Select date...",
      }),
    },
  },
  // Boolean dropdown example
  {
    locator: { type: "property", id: "isRemote" },
    renderCell: (object) => {
      if (object.isRemote == null) {
        return "No Value";
      }
      return object.isRemote ? "Yes" : "No";
    },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [true, false],
        itemToStringLabel: (item: boolean | undefined) =>
          item === false ? "No" : item === true ? "Yes" : "No Value",
      }),
    },
  },
  // Custom columns: getCellValue supplies the value, cellValueType picks the editor
  {
    locator: { type: "custom", id: "reportsTo" },
    columnName: "Reports To (#)",
    getCellValue: (employee) =>
      employee.leadEmployeeNumber ?? employee.mentorEmployeeNumber,
    cellValueType: "integer",
    editable: true,
    orderable: false,
  },
  {
    locator: { type: "custom", id: "contact" },
    columnName: "Contact",
    getCellValue: (employee) =>
      [employee.emailPrimaryWork, employee.jobTitle]
        .filter((part) => part != null)
        .join(" · "),
    cellValueType: "string",
    editable: true,
    orderable: false,
    renderCell: (object, locator, value) => <em>{value || "No value"}</em>,
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="manual"
  />
);\`
      }
    }
  },
  render: args => {
    const [lastEdit, setLastEdit] = useState<CellEditInfo<Osdk.Instance<typeof Employee>> | undefined>();
    const handleCellValueChanged = useCallback((editInfo: CellEditInfo<Osdk.Instance<typeof Employee>>) => {
      args.onCellValueChanged?.(editInfo as any);
      setLastEdit(editInfo);
    }, [args]);
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <div style={{
        padding: "12px",
        backgroundColor: "#fff3cd",
        marginBottom: "8px",
        borderRadius: "4px"
      }}>
          Try changing showEditFooter to false to hide the edit footer bar.
          Change edit mode to "manual" to enable inline editing with an Edit
          Table button.
        </div>
        {lastEdit != null && <div style={{
        padding: "12px",
        backgroundColor: "#d1ecf1",
        marginBottom: "8px",
        borderRadius: "4px",
        fontFamily: "monospace",
        fontSize: "13px"
      }}>
            <strong>Last cell edit:</strong> Column "{lastEdit.columnId}"
            changed from "{String(lastEdit.oldValue)}" to "
            {String(lastEdit.newValue)}"
          </div>}
        <ObjectTable {...args} onCellValueChanged={handleCellValueChanged} />
      </div>;
  },
  // Manual edit mode: enter edit mode, then edit a text cell, a dropdown cell
  // and a date cell (each firing onCellValueChanged), and finally Cancel out.
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Display mode first — the fullName cell shows plain text.
    await canvas.findByText(TARGET_DATA);

    // Enter edit mode; cells become editable inputs.
    await userEvent.click(canvas.getByRole("button", {
      name: "Edit Table"
    }));

    // First data row (header row is index 0). Cells follow column order.
    const firstRow = canvas.getAllByRole("row")[1];
    const cellsOf = () => within(firstRow).getAllByRole("cell");

    // Text edit (fullName, column 0). Typing then tabbing away commits the edit.
    const nameInput = within(cellsOf()[0]).getByRole("textbox");
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Ahmed Williamson");
    await userEvent.tab();
    await waitFor(() => expect(args.onCellValueChanged).toHaveBeenCalledWith(expect.objectContaining({
      columnId: "fullName",
      newValue: "Ahmed Williamson"
    })));

    // Dropdown edit (department, column 3) — visible once the row is focused.
    const departmentCombobox = await within(cellsOf()[3]).findByRole("combobox");
    await userEvent.click(departmentCombobox);
    await userEvent.click(await screen.findByRole("option", {
      name: "Engineering"
    }));
    await waitFor(() => expect(args.onCellValueChanged).toHaveBeenCalledWith(expect.objectContaining({
      columnId: "department",
      newValue: "Engineering"
    })));

    // Date edit (firstFullTimeStartDate, column 5) — focusing opens the
    // calendar, then "Today" commits a new value.
    const dateInput = within(cellsOf()[5]).getByRole("combobox");
    await userEvent.click(dateInput);
    await userEvent.click(await screen.findByRole("button", {
      name: "Today"
    }));
    await waitFor(() => expect(args.onCellValueChanged).toHaveBeenCalledWith(expect.objectContaining({
      columnId: "firstFullTimeStartDate"
    })));

    // Custom columns (reportsTo, column 7; contact, column 8) have no ontology
    // property, so their editors come from \`cellValueType\`: the integer column
    // renders a number input and commits a number, not the string it would
    // have produced without one.
    const reportsToInput = within(cellsOf()[7]).getByRole("spinbutton");
    await expect(reportsToInput).toHaveAttribute("type", "number");
    await userEvent.click(reportsToInput);
    await userEvent.clear(reportsToInput);
    await userEvent.type(reportsToInput, "4242");
    await userEvent.tab();
    await waitFor(() => expect(args.onCellValueChanged).toHaveBeenCalledWith(expect.objectContaining({
      columnId: "reportsTo",
      newValue: 4242
    })));

    // The string-typed custom column stays a text input.
    await expect(within(cellsOf()[8]).getByRole("textbox")).toHaveAttribute("type", "text");

    // Cancel exits edit mode; the "Edit Table" button returns.
    await userEvent.click(canvas.getByRole("button", {
      name: "Cancel"
    }));
    await expect(await canvas.findByRole("button", {
      name: "Edit Table"
    })).toBeInTheDocument();
  }
}`,...(S=(R=f.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var j,B,P;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      },
      editable: true,
      // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
      validateEdit: async (value: unknown) => {
        const str = String(value ?? "");
        return str.trim().length >= 2 ? undefined : "Name must be at least 2 characters long";
      }
    }, {
      locator: {
        type: "property",
        id: "emailPrimaryWork"
      },
      editable: true,
      // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
      validateEdit: async (value: unknown) => {
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/u;
        return emailRegex.test(String(value ?? "")) ? undefined : "Please enter a valid email address";
      }
    }, {
      locator: {
        type: "property",
        id: "employeeNumber"
      },
      editable: true,
      // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
      validateEdit: async (value: unknown) => {
        return Number(value) > 0 ? undefined : "Employee number must be positive";
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DROPDOWN",
        getFieldComponentProps: () => ({
          items: ["Software Engineer", "Senior Software Engineer", "Staff Engineer", "Engineering Manager", "Product Manager", "Designer"],
          isSearchable: true,
          placeholder: "Search job titles…"
        })
      },
      // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
      validateEdit: async (value: unknown) => {
        return value ? undefined : "Job title is required";
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DROPDOWN",
        getFieldComponentProps: () => ({
          items: ["Engineering", "Product", "Design", "Sales", "Marketing", "Finance", "Human Resources"]
        })
      }
    }, {
      locator: {
        type: "property",
        id: "firstFullTimeStartDate"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DATE_PICKER",
        getFieldComponentProps: () => ({
          showTime: false,
          placeholder: "Select date..."
        })
      },
      // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
      validateEdit: async (value: unknown) => {
        if (!value || isNaN(Date.parse(value as string))) {
          return "Please enter a valid date";
        }
        const date = new Date(value as string);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (date < today) {
          return "Date cannot be before today";
        }
        return undefined;
      }
    }],
    editMode: "always",
    onSubmitEdits: fn(
    // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
    async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
      return true;
    })
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
    validateEdit: async (value: string) => {
      return value.trim().length >= 2 ? undefined : "Name must be at least 2 characters long";
    },
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
    validateEdit: async (value: string) => {
      const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
      return emailRegex.test(value) ? undefined : "Please enter a valid email address";
    },
  },
  {
    locator: { type: "property", id: "employeeNumber" },
    editable: true,
    validateEdit: async (value: number) => {
      return value > 0 ? undefined : "Employee number must be positive";
    },
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Software Engineer",
          "Senior Software Engineer",
          "Staff Engineer",
          "Engineering Manager",
          "Product Manager",
          "Designer",
        ],
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
    },
    validateEdit: async (value: unknown) => {
      return value ? undefined : "Job title is required";
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      }),
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="always"
    onSubmitEdits={async (edits) => {
      return true;
    }}
  />
);\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <div style={{
      padding: "12px",
      backgroundColor: "#fff3cd",
      marginBottom: "8px",
      borderRadius: "4px"
    }}>
        Try editing cells with invalid values to see validation in action:
        <ul style={{
        margin: "8px 0 0 20px"
      }}>
          <li>Name must be at least 2 characters</li>
          <li>Email must be a valid format</li>
          <li>Employee number must be positive</li>
          <li>Job title is required</li>
          <li>Start date is required</li>
        </ul>
      </div>
      <ObjectTable {...args} objectType={Employee} />
    </div>,
  // editMode "always": entering an invalid value surfaces a validation error and
  // disables Submit Edits; correcting the value clears the error and re-enables.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Cells are editable immediately; fullName is pre-filled with the value.
    const nameInput = await canvas.findByDisplayValue(TARGET_DATA);

    // Too-short name fails validation (min 2 chars).
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "a");
    await userEvent.tab();
    await waitFor(() => expect(canvas.getByText("Validation error")).toBeInTheDocument());
    await expect(canvas.getByRole("button", {
      name: "Submit Edits"
    })).toBeDisabled();

    // Correcting the value clears the error and re-enables Submit Edits.
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Valid Name");
    await userEvent.tab();
    await waitFor(() => expect(canvas.queryByText("Validation error")).not.toBeInTheDocument());
    await expect(canvas.getByRole("button", {
      name: "Submit Edits"
    })).toBeEnabled();

    // Restore the original value
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, TARGET_DATA);
    await userEvent.tab();
    await waitFor(() => expect(canvas.getByDisplayValue(TARGET_DATA)).toBeInTheDocument());
  }
}`,...(P=(B=w.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var F,N,k;E.parameters={...E.parameters,docs:{...(F=E.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: editableColumnDefinitions,
    editMode: "manual",
    onSubmitEdits: fn(async (edits: CellEditInfo<Osdk.Instance<Employee>>[]) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    })
  } as any,
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  {
    locator: { type: "property", id: "fullName" },
    editable: true,
  },
  {
    locator: { type: "property", id: "emailPrimaryWork" },
    editable: true,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Software Engineer",
          "Senior Software Engineer",
          "Staff Engineer",
          "Engineering Manager",
          "Product Manager",
          "Designer",
        ],
        isSearchable: true,
        placeholder: "Search job titles…",
      }),
    },
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [
          "Engineering",
          "Product",
          "Design",
          "Sales",
          "Marketing",
          "Finance",
          "Human Resources",
        ],
      }),
    },
  },
  {
    locator: { type: "property", id: "firstInternStartDate" },
    editable: true,
    renderCell: (object) => (
      <div>
        {object.firstInternStartDate
          ? new Date(object.firstInternStartDate).toISOString()
          : "No value"}
      </div>
    ),
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DATE_PICKER",
      getFieldComponentProps: () => ({
        showTime: false,
        placeholder: "Select date...",
      }),
    },
  },
  // Boolean dropdown example
  {
    locator: { type: "property", id: "isRemote" },
    renderCell: (object) => {
      if (object.isRemote == null) {
        return "No Value";
      }
      return object.isRemote ? "Yes" : "No";
    },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [true, false],
        itemToStringLabel: (item: boolean | undefined) =>
          item === false ? "No" : item === true ? "Yes" : "No Value",
      }),
    },
  },
  // Custom columns: getCellValue supplies the value, cellValueType picks the editor
  {
    locator: { type: "custom", id: "reportsTo" },
    columnName: "Reports To (#)",
    getCellValue: (employee) =>
      employee.leadEmployeeNumber ?? employee.mentorEmployeeNumber,
    cellValueType: "integer",
    editable: true,
    orderable: false,
  },
  {
    locator: { type: "custom", id: "contact" },
    columnName: "Contact",
    getCellValue: (employee) =>
      [employee.emailPrimaryWork, employee.jobTitle]
        .filter((part) => part != null)
        .join(" · "),
    cellValueType: "string",
    editable: true,
    orderable: false,
    renderCell: (object, locator, value) => <em>{value || "No value"}</em>,
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="manual"
    onCellValueChanged={(info) => {
      console.log("Cell value changed:", info);
    }}
    onSubmitEdits={async (edits) => {
      // Call your API or action here
      await submitEmployeeUpdates(edits);
      // Return true to indicate success and clear edits
      return true;
    }}
  />
);\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} objectType={Employee} />
    </div>,
  // Editing enables "Submit Edits"; submitting calls onSubmitEdits and, on
  // success, clears edits and exits edit mode (the async mock resolves true).
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(TARGET_DATA);
    await userEvent.click(canvas.getByRole("button", {
      name: "Edit Table"
    }));
    const firstRow = canvas.getAllByRole("row")[1];
    const firstCell = within(firstRow).getAllByRole("cell")[0];
    const nameInput = within(firstCell).getByRole("textbox");
    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Ahmed Williamson");
    await userEvent.tab();

    // The Submit Edits button enables once there is a pending edit.
    const submit = canvas.getByRole("button", {
      name: "Submit Edits"
    });
    await waitFor(() => expect(submit).toBeEnabled());
    await userEvent.click(submit);
    await waitFor(() => expect(args.onSubmitEdits).toHaveBeenCalled());

    // After the async submit resolves successfully, edit mode exits.
    await waitFor(() => expect(canvas.getByRole("button", {
      name: "Edit Table"
    })).toBeInTheDocument(), {
      timeout: 5000
    });
  }
}`,...(k=(N=E.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var O,I,V;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "jobTitle"
      },
      editable: (rowData: Osdk.Instance<Employee>) => {
        const jobTitle = rowData.jobTitle ?? "";
        return jobTitle === "Senior Product Manager";
      },
      cellValueType: "string",
      renderCell: (_obj, _locator, value) => <div style={{
        fontStyle: "italic",
        color: "grey"
      }}>
            {typeof value === "string" ? value : ""}
          </div>
    }, {
      locator: {
        type: "property",
        id: "department"
      },
      editable: true,
      editFieldConfig: {
        fieldComponent: "DROPDOWN",
        getFieldComponentProps: (employee: Osdk.Instance<Employee>) => ({
          items: employee.department === "Operations" ? ["Sales", "Marketing"] : ["Sales", "Marketing", "Finance", "Human Resources"]
        })
      }
    }],
    editMode: "always" as const,
    onCellValueChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates per-row configuration with \`editable\` as a predicate function and dynamic \`getFieldComponentProps\` that computes dropdown items from the row's data. " + "jobTitle is only editable for 'Senior Product Manager' rows. Department uses a dropdown that shows only 2 options for Operations rows"
      },
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: { type: "property", id: "jobTitle" },
    // Only allow editing for Senior Product Manager
    editable: (rowData: Osdk.Instance<Employee>) => {
      const jobTitle = rowData.jobTitle ?? "";
      return jobTitle === "Senior Product Manager";
    },
    cellValueType: "string",
    renderCell: (_obj, _locator, value) => (
      <div
        style={{
          fontStyle: "italic",
          color: "grey",
        }}
      >
        {typeof value === "string" ? value : ""}
      </div>
    ),
  },
  {
    locator: { type: "property", id: "department" },
    editable: true,
    editFieldConfig: {
      fieldComponent: "DROPDOWN",
      // Dropdown items depend on the row's current department
      getFieldComponentProps: (employee) => ({
        items: employee.department === "Engineering"
          ? ["Engineering", "Product", "Design"]
          : ["Sales", "Marketing", "Finance", "Human Resources"],
      }),
    },
  },
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="always"
  />
);\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <div style={{
      padding: "12px",
      backgroundColor: "#fff3cd",
      marginBottom: "8px",
      borderRadius: "4px"
    }}>
        JobTitle is only editable for "Senior Product Manager" rows. Department
        dropdown shows only 2 options for Operations rows.
      </div>
      <ObjectTable {...args} />
    </div>,
  // Per-row config: jobTitle is only editable for "Senior Product Manager" rows,
  // and the department dropdown offers a restricted item list for Operations
  // rows (2 options) versus other rows (4, including "Finance").
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(TARGET_DATA);

    // jobTitle (column 1) is editable only for the Senior Product Manager.
    const editableCell = within(rowContaining(canvas.getByText("Margaret Jackson"))).getAllByRole("cell");
    await expect(editableCell[1]).toHaveAttribute("data-editable", "true");
    const nonEditableCell = within(rowContaining(canvas.getByText(TARGET_DATA))).getAllByRole("cell");
    await expect(nonEditableCell[1]).not.toHaveAttribute("data-editable");

    // Operations row department dropdown shows only 2 options.
    const opRow = rowContaining(canvas.getByText("William Liu"));
    await userEvent.click(canvas.getByText("William Liu"));
    void fireEvent.click(await within(opRow).findByRole("combobox"));
    await expect(await screen.findAllByRole("option")).toHaveLength(2);
    await expect(screen.queryByRole("option", {
      name: "Finance"
    })).not.toBeInTheDocument();
    await userEvent.keyboard("{Escape}");

    // Non-Operations row: the list includes "Finance".
    const ahmedRow = rowContaining(canvas.getByText(TARGET_DATA));
    await userEvent.click(canvas.getByText(TARGET_DATA));
    void fireEvent.click(await within(ahmedRow).findByRole("combobox"));
    await expect(await screen.findByRole("option", {
      name: "Finance"
    })).toBeInTheDocument();

    // Close the dropdown so the story ends with no popup open.
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("option", {
      name: "Finance"
    })).not.toBeInTheDocument());
  }
}`,...(V=(I=v.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const Ve=["EditableTable","EditableWithValidation","WithSubmitEditsButton","PerRowEditableAndFieldConfig"];export{f as EditableTable,w as EditableWithValidation,v as PerRowEditableAndFieldConfig,E as WithSubmitEditsButton,Ve as __namedExportsOrder,Ie as default};
