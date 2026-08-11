import{r as T,j as i}from"./iframe-Cl70dWji.js";import{O as C}from"./object-table-DSKBKJEJ.js";import{E as p}from"./Employee-BAk2o20h.js";import{f as q,h as H,o as L,T as d,r as y}from"./objectTableStoryHelpers-CleIlg4l.js";import"./preload-helper-QiZ_zLcF.js";import"./Table-CT32E32c.js";import"./index-Ds00pONi.js";import"./Dialog-BQOFHT2N.js";import"./cross-BB7Pc46-.js";import"./svgIconContainer-BTNEBHys.js";import"./useBaseUiId-DOyYal5B.js";import"./InternalBackdrop-DrCY85f_.js";import"./composite-C748PZ0N.js";import"./index-C3QZTmM_.js";import"./index-CafCqYhX.js";import"./index-BNc2rzrN.js";import"./useEventCallback-CuVM_nnh.js";import"./SkeletonBar-ZZ-gHcd3.js";import"./LoadingCell-C4fmmZXT.js";import"./ColumnConfigDialog-D1JnnrAy.js";import"./DraggableList-Cy_C57Fv.js";import"./search-DF6sLdtJ.js";import"./Input-BXSbXZmI.js";import"./useControlled-Q9tFcpq6.js";import"./isEqual-C6EEvx8A.js";import"./isObject-DQR0yTql.js";import"./Button-D15y4J1a.js";import"./ActionButton-DewavcTR.js";import"./Checkbox-CMJRhaQz.js";import"./useValueChanged-BOJK3Ya0.js";import"./CollapsiblePanel-5JgopO6I.js";import"./MultiColumnSortDialog-D6_YMFCs.js";import"./MenuTrigger-BqxlSmck.js";import"./CompositeItem-BomeUMbI.js";import"./ToolbarRootContext-DqYG79A3.js";import"./getDisabledMountTransitionStyles-C6EScx01.js";import"./getPseudoElementBounds-DMThbFPG.js";import"./chevron-down-CVLu7rIR.js";import"./index-CoYvOkpA.js";import"./error-BlBC8OXl.js";import"./BaseCbacBanner-l6rCUghX.js";import"./makeExternalStore-BMmPmQBR.js";import"./Tooltip-CXyot0O5.js";import"./PopoverPopup-CoC_t-0L.js";import"./toNumber-BLVbDFpr.js";import"./useOsdkClient-DnZ3twwm.js";import"./tick-DgbGHwXk.js";import"./DropdownField-Bav9j6aq.js";import"./withOsdkMetrics-DW3ouCxC.js";const{expect:o,fireEvent:D,fn:b,screen:u,userEvent:n,waitFor:m,within:r}=__STORYBOOK_MODULE_TEST__,We={...L,title:"Components/ObjectTable/Features/Editing"},f={args:{objectType:p,columnDefinitions:H,editMode:"manual",onCellValueChanged:b()},parameters:{docs:{source:{code:`const columnDefinitions = [
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
];

return (
  <ObjectTable
    objectType={Employee}
    columnDefinitions={columnDefinitions}
    editMode="manual"
  />
);`}}},render:e=>{const[t,a]=T.useState(),s=T.useCallback(c=>{var l;(l=e.onCellValueChanged)==null||l.call(e,c),a(c)},[e]);return i.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[i.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'Try changing showEditFooter to false to hide the edit footer bar. Change edit mode to "manual" to enable inline editing with an Edit Table button.'}),t!=null&&i.jsxs("div",{style:{padding:"12px",backgroundColor:"#d1ecf1",marginBottom:"8px",borderRadius:"4px",fontFamily:"monospace",fontSize:"13px"},children:[i.jsx("strong",{children:"Last cell edit:"}),' Column "',t.columnId,'" changed from "',String(t.oldValue),'" to "',String(t.newValue),'"']}),i.jsx(C,{...e,onCellValueChanged:s})]})},play:async({canvasElement:e,args:t})=>{const a=r(e);await a.findByText(d),await n.click(a.getByRole("button",{name:"Edit Table"}));const s=a.getAllByRole("row")[1],c=()=>r(s).getAllByRole("cell"),l=r(c()[0]).getByRole("textbox");await n.click(l),await n.clear(l),await n.type(l,"Ahmed Williamson"),await n.tab(),await m(()=>o(t.onCellValueChanged).toHaveBeenCalledWith(o.objectContaining({columnId:"fullName",newValue:"Ahmed Williamson"})));const g=await r(c()[3]).findByRole("combobox");await n.click(g),await n.click(await u.findByRole("option",{name:"Engineering"})),await m(()=>o(t.onCellValueChanged).toHaveBeenCalledWith(o.objectContaining({columnId:"department",newValue:"Engineering"})));const _=r(c()[5]).getByRole("combobox");await n.click(_),await n.click(await u.findByRole("button",{name:"Today"})),await m(()=>o(t.onCellValueChanged).toHaveBeenCalledWith(o.objectContaining({columnId:"firstFullTimeStartDate"}))),await n.click(a.getByRole("button",{name:"Cancel"})),await o(await a.findByRole("button",{name:"Edit Table"})).toBeInTheDocument()}},w={args:{objectType:p,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0,validateEdit:async e=>String(e??"").trim().length>=2?void 0:"Name must be at least 2 characters long"},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0,validateEdit:async e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(String(e??""))?void 0:"Please enter a valid email address"},{locator:{type:"property",id:"employeeNumber"},editable:!0,validateEdit:async e=>Number(e)>0?void 0:"Employee number must be positive"},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"})},validateEdit:async e=>e?void 0:"Job title is required"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]})}},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",getFieldComponentProps:()=>({showTime:!1,placeholder:"Select date..."})},validateEdit:async e=>{if(!e||isNaN(Date.parse(e)))return"Please enter a valid date";const t=new Date(e),a=new Date;if(a.setHours(0,0,0,0),t<a)return"Date cannot be before today"}}],editMode:"always",onSubmitEdits:b(async e=>!0)},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>i.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[i.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:["Try editing cells with invalid values to see validation in action:",i.jsxs("ul",{style:{margin:"8px 0 0 20px"},children:[i.jsx("li",{children:"Name must be at least 2 characters"}),i.jsx("li",{children:"Email must be a valid format"}),i.jsx("li",{children:"Employee number must be positive"}),i.jsx("li",{children:"Job title is required"}),i.jsx("li",{children:"Start date is required"})]})]}),i.jsx(C,{...e,objectType:p})]}),play:async({canvasElement:e})=>{const t=r(e),a=await t.findByDisplayValue(d);await n.click(a),await n.clear(a),await n.type(a,"a"),await n.tab(),await m(()=>o(t.getByText("Validation error")).toBeInTheDocument()),await o(t.getByRole("button",{name:"Submit Edits"})).toBeDisabled(),await n.click(a),await n.clear(a),await n.type(a,"Valid Name"),await n.tab(),await m(()=>o(t.queryByText("Validation error")).not.toBeInTheDocument()),await o(t.getByRole("button",{name:"Submit Edits"})).toBeEnabled(),await n.click(a),await n.clear(a),await n.type(a,d),await n.tab(),await m(()=>o(t.getByDisplayValue(d)).toBeInTheDocument())}},h={args:{objectType:p,columnDefinitions:H,editMode:"manual",onSubmitEdits:b(async e=>(await new Promise(t=>setTimeout(t,1e3)),!0))},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(C,{...e,objectType:p})}),play:async({canvasElement:e,args:t})=>{const a=r(e);await a.findByText(d),await n.click(a.getByRole("button",{name:"Edit Table"}));const s=a.getAllByRole("row")[1],c=r(s).getAllByRole("cell")[0],l=r(c).getByRole("textbox");await n.click(l),await n.clear(l),await n.type(l,"Ahmed Williamson"),await n.tab();const g=a.getByRole("button",{name:"Submit Edits"});await m(()=>o(g).toBeEnabled()),await n.click(g),await m(()=>o(t.onSubmitEdits).toHaveBeenCalled()),await m(()=>o(a.getByRole("button",{name:"Edit Table"})).toBeInTheDocument(),{timeout:5e3})}},E={args:{objectType:p,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"},editable:e=>(e.jobTitle??"")==="Senior Product Manager"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:e=>({items:e.department==="Operations"?["Sales","Marketing"]:["Sales","Marketing","Finance","Human Resources"]})}}],editMode:"always",onCellValueChanged:b()},parameters:{docs:{description:{story:"Demonstrates per-row configuration with `editable` as a predicate function and dynamic `getFieldComponentProps` that computes dropdown items from the row's data. jobTitle is only editable for 'Senior Product Manager' rows. Department uses a dropdown that shows only 2 options for Operations rows"},source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: { type: "property", id: "jobTitle" },
    // Only allow editing for Senior Product Manager
    editable: (rowData) => {
      const jobTitle = String(rowData.jobTitle ?? "");
      return jobTitle === "Senior Product Manager";
    },
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
);`}}},render:e=>i.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[i.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'JobTitle is only editable for "Senior Product Manager" rows. Department dropdown shows only 2 options for Operations rows.'}),i.jsx(C,{...e})]}),play:async({canvasElement:e})=>{const t=r(e);await t.findByText(d);const a=r(y(t.getByText("Margaret Jackson"))).getAllByRole("cell");await o(a[1]).toHaveAttribute("data-editable","true");const s=r(y(t.getByText(d))).getAllByRole("cell");await o(s[1]).not.toHaveAttribute("data-editable");const c=y(t.getByText("William Liu"));await n.click(t.getByText("William Liu")),D.click(await r(c).findByRole("combobox")),await o(await u.findAllByRole("option")).toHaveLength(2),await o(u.queryByRole("option",{name:"Finance"})).not.toBeInTheDocument(),await n.keyboard("{Escape}");const l=y(t.getByText(d));await n.click(t.getByText(d)),D.click(await r(l).findByRole("combobox")),await o(await u.findByRole("option",{name:"Finance"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await m(()=>o(u.queryByRole("option",{name:"Finance"})).not.toBeInTheDocument())}},v={args:{objectType:p,columnDefinitions:q,editMode:"always",onCellValueChanged:b()},parameters:{docs:{description:{story:"Custom columns have no ontology property behind them. `getCellValue` gives them a value, and `dataType` tells the table which editor to use and how to parse what the user commits — without it a numeric custom column gets a text input and commits a string."},source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: { type: "custom", id: "reportsTo" },
    columnName: "Reports to (#)",
    getCellValue: (employee) =>
      employee.leadEmployeeNumber ?? employee.mentorEmployeeNumber,
    dataType: "integer",
    editable: true,
  },
  {
    locator: { type: "custom", id: "contact" },
    columnName: "Contact",
    getCellValue: (employee) =>
      [employee.emailPrimaryWork, employee.jobTitle]
        .filter((part) => part != null)
        .join(" · "),
    dataType: "string",
    editable: true,
    renderCell: (object, locator, value) => <em>{value || "No value"}</em>,
  },
];`}}},play:async({canvasElement:e})=>{const t=r(e);await t.findByText(d);const a=y(t.getByText(d)),s=r(a).getAllByRole("cell");await o(s[1]).toHaveAttribute("data-editable","true"),await o(r(s[1]).getByRole("spinbutton")).toHaveAttribute("type","number"),await o(r(s[2]).getByRole("textbox")).toHaveAttribute("type","text")}};var x,R,S;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
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

    // Cancel exits edit mode; the "Edit Table" button returns.
    await userEvent.click(canvas.getByRole("button", {
      name: "Cancel"
    }));
    await expect(await canvas.findByRole("button", {
      name: "Edit Table"
    })).toBeInTheDocument();
  }
}`,...(S=(R=f.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var B,j,P;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(j=w.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var F,N,O;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(N=h.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var k,A,I;E.parameters={...E.parameters,docs:{...(k=E.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      }
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
    editable: (rowData) => {
      const jobTitle = String(rowData.jobTitle ?? "");
      return jobTitle === "Senior Product Manager";
    },
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
}`,...(I=(A=E.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var M,V,W;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: customEditableColumnDefinitions,
    editMode: "always" as const,
    onCellValueChanged: fn()
  } as EmployeeTableProps,
  parameters: {
    docs: {
      description: {
        story: "Custom columns have no ontology property behind them. \`getCellValue\` " + "gives them a value, and \`dataType\` tells the table which editor to " + "use and how to parse what the user commits — without it a numeric " + "custom column gets a text input and commits a string."
      },
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  {
    locator: { type: "custom", id: "reportsTo" },
    columnName: "Reports to (#)",
    getCellValue: (employee) =>
      employee.leadEmployeeNumber ?? employee.mentorEmployeeNumber,
    dataType: "integer",
    editable: true,
  },
  {
    locator: { type: "custom", id: "contact" },
    columnName: "Contact",
    getCellValue: (employee) =>
      [employee.emailPrimaryWork, employee.jobTitle]
        .filter((part) => part != null)
        .join(" · "),
    dataType: "string",
    editable: true,
    renderCell: (object, locator, value) => <em>{value || "No value"}</em>,
  },
];\`
      }
    }
  },
  // dataType: "integer" must reach the editor, so the derived column renders a
  // number input rather than the text input every custom column got before.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(TARGET_DATA);
    const row = rowContaining(canvas.getByText(TARGET_DATA));
    const cells = within(row).getAllByRole("cell");
    await expect(cells[1]).toHaveAttribute("data-editable", "true");
    await expect(within(cells[1]).getByRole("spinbutton")).toHaveAttribute("type", "number");

    // The string column stays a text input.
    await expect(within(cells[2]).getByRole("textbox")).toHaveAttribute("type", "text");
  }
}`,...(W=(V=v.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const He=["EditableTable","EditableWithValidation","WithSubmitEditsButton","PerRowEditableAndFieldConfig","CustomEditableColumns"];export{v as CustomEditableColumns,f as EditableTable,w as EditableWithValidation,E as PerRowEditableAndFieldConfig,h as WithSubmitEditsButton,He as __namedExportsOrder,We as default};
