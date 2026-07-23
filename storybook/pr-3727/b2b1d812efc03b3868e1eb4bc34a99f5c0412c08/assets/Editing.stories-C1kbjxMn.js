import{r as v,j as o}from"./iframe-BbXT0DDw.js";import{O as h}from"./object-table-DyVg84mn.js";import{E as u}from"./Employee-BAk2o20h.js";import{f as A,o as W,T as c,r as b}from"./objectTableStoryHelpers-2ciI6YTZ.js";import"./preload-helper-eaV1mNfD.js";import"./Table-C_hSwjqG.js";import"./index-B2WF_Bz4.js";import"./Dialog-DxnoSr1H.js";import"./cross-DkAT-B8J.js";import"./svgIconContainer-CJjpcCkC.js";import"./useBaseUiId-D1Pe3AtR.js";import"./InternalBackdrop-wwPrzg68.js";import"./composite-BPu-b4cl.js";import"./index-CcSoWyRj.js";import"./index-DL1_iZ5Q.js";import"./index-BgpMFVad.js";import"./useEventCallback-CMoXdN8R.js";import"./SkeletonBar-D6wzzmti.js";import"./LoadingCell-BpNSEnvN.js";import"./ColumnConfigDialog-BJFjIqLN.js";import"./DraggableList-Cu105ekh.js";import"./search-Dbb95ii9.js";import"./Input-D1v8skGZ.js";import"./useControlled-C7P20UXk.js";import"./isEqual-B1jd_Lro.js";import"./isObject-CIEsB9pN.js";import"./Button-B2cJncoY.js";import"./ActionButton-CZYDa-34.js";import"./Checkbox-CTFOt7Kq.js";import"./useValueChanged-C3uOLpwW.js";import"./CollapsiblePanel-BxivYWMz.js";import"./MultiColumnSortDialog-07UE4H-p.js";import"./MenuTrigger-Dnfzzi-8.js";import"./CompositeItem-DvYz6hSy.js";import"./ToolbarRootContext-dJmq_z35.js";import"./getDisabledMountTransitionStyles-mdZnUNwd.js";import"./getPseudoElementBounds-D6vpj3ov.js";import"./chevron-down-DlzvZ4IU.js";import"./index-C-hobEV_.js";import"./error-CS7KmN1B.js";import"./BaseCbacBanner-CsXlomMy.js";import"./makeExternalStore-Bk59v3u3.js";import"./Tooltip-DguQTGZo.js";import"./PopoverPopup-X5uIZQx-.js";import"./toNumber-xbqrJNuR.js";import"./useOsdkClient-DKcQN8kf.js";import"./tick-BpQfSN9K.js";import"./DropdownField-Cvt8w-VI.js";import"./withOsdkMetrics-Cle2y2cZ.js";const{expect:i,fireEvent:T,fn:C,screen:m,userEvent:t,waitFor:d,within:r}=__STORYBOOK_MODULE_TEST__,Ne={...W,title:"Components/ObjectTable/Features/Editing"},g={args:{objectType:u,columnDefinitions:A,editMode:"manual",onCellValueChanged:C()},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>{const[n,a]=v.useState(),p=v.useCallback(s=>{var l;(l=e.onCellValueChanged)==null||l.call(e,s),a(s)},[e]);return o.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[o.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'Try changing showEditFooter to false to hide the edit footer bar. Change edit mode to "manual" to enable inline editing with an Edit Table button.'}),n!=null&&o.jsxs("div",{style:{padding:"12px",backgroundColor:"#d1ecf1",marginBottom:"8px",borderRadius:"4px",fontFamily:"monospace",fontSize:"13px"},children:[o.jsx("strong",{children:"Last cell edit:"}),' Column "',n.columnId,'" changed from "',String(n.oldValue),'" to "',String(n.newValue),'"']}),o.jsx(h,{...e,onCellValueChanged:p})]})},play:async({canvasElement:e,args:n})=>{const a=r(e);await a.findByText(c),await t.click(a.getByRole("button",{name:"Edit Table"}));const p=a.getAllByRole("row")[1],s=()=>r(p).getAllByRole("cell"),l=r(s()[0]).getByRole("textbox");await t.click(l),await t.clear(l),await t.type(l,"Ahmed Williamson"),await t.tab(),await d(()=>i(n.onCellValueChanged).toHaveBeenCalledWith(i.objectContaining({columnId:"fullName",newValue:"Ahmed Williamson"})));const y=await r(s()[3]).findByRole("combobox");await t.click(y),await t.click(await m.findByRole("option",{name:"Engineering"})),await d(()=>i(n.onCellValueChanged).toHaveBeenCalledWith(i.objectContaining({columnId:"department",newValue:"Engineering"})));const M=r(s()[5]).getByRole("combobox");await t.click(M),await t.click(await m.findByRole("button",{name:"Today"})),await d(()=>i(n.onCellValueChanged).toHaveBeenCalledWith(i.objectContaining({columnId:"firstFullTimeStartDate"}))),await t.click(a.getByRole("button",{name:"Cancel"})),await i(await a.findByRole("button",{name:"Edit Table"})).toBeInTheDocument()}},f={args:{objectType:u,columnDefinitions:[{locator:{type:"property",id:"fullName"},editable:!0,validateEdit:async e=>String(e??"").trim().length>=2?void 0:"Name must be at least 2 characters long"},{locator:{type:"property",id:"emailPrimaryWork"},editable:!0,validateEdit:async e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(String(e??""))?void 0:"Please enter a valid email address"},{locator:{type:"property",id:"employeeNumber"},editable:!0,validateEdit:async e=>Number(e)>0?void 0:"Employee number must be positive"},{locator:{type:"property",id:"jobTitle"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Software Engineer","Senior Software Engineer","Staff Engineer","Engineering Manager","Product Manager","Designer"],isSearchable:!0,placeholder:"Search job titles…"})},validateEdit:async e=>e?void 0:"Job title is required"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:()=>({items:["Engineering","Product","Design","Sales","Marketing","Finance","Human Resources"]})}},{locator:{type:"property",id:"firstFullTimeStartDate"},editable:!0,editFieldConfig:{fieldComponent:"DATE_PICKER",getFieldComponentProps:()=>({showTime:!1,placeholder:"Select date..."})},validateEdit:async e=>{if(!e||isNaN(Date.parse(e)))return"Please enter a valid date";const n=new Date(e),a=new Date;if(a.setHours(0,0,0,0),n<a)return"Date cannot be before today"}}],editMode:"always",onSubmitEdits:C(async e=>!0)},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>o.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[o.jsxs("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:["Try editing cells with invalid values to see validation in action:",o.jsxs("ul",{style:{margin:"8px 0 0 20px"},children:[o.jsx("li",{children:"Name must be at least 2 characters"}),o.jsx("li",{children:"Email must be a valid format"}),o.jsx("li",{children:"Employee number must be positive"}),o.jsx("li",{children:"Job title is required"}),o.jsx("li",{children:"Start date is required"})]})]}),o.jsx(h,{...e,objectType:u})]}),play:async({canvasElement:e})=>{const n=r(e),a=await n.findByDisplayValue(c);await t.click(a),await t.clear(a),await t.type(a,"a"),await t.tab(),await d(()=>i(n.getByText("Validation error")).toBeInTheDocument()),await i(n.getByRole("button",{name:"Submit Edits"})).toBeDisabled(),await t.click(a),await t.clear(a),await t.type(a,"Valid Name"),await t.tab(),await d(()=>i(n.queryByText("Validation error")).not.toBeInTheDocument()),await i(n.getByRole("button",{name:"Submit Edits"})).toBeEnabled(),await t.click(a),await t.clear(a),await t.type(a,c),await t.tab(),await d(()=>i(n.getByDisplayValue(c)).toBeInTheDocument())}},w={args:{objectType:u,columnDefinitions:A,editMode:"manual",onSubmitEdits:C(async e=>(await new Promise(n=>setTimeout(n,1e3)),!0))},parameters:{docs:{source:{code:`const columnDefinitions = [
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
);`}}},render:e=>o.jsx("div",{className:"object-table-container",style:{height:"600px"},children:o.jsx(h,{...e,objectType:u})}),play:async({canvasElement:e,args:n})=>{const a=r(e);await a.findByText(c),await t.click(a.getByRole("button",{name:"Edit Table"}));const p=a.getAllByRole("row")[1],s=r(p).getAllByRole("cell")[0],l=r(s).getByRole("textbox");await t.click(l),await t.clear(l),await t.type(l,"Ahmed Williamson"),await t.tab();const y=a.getByRole("button",{name:"Submit Edits"});await d(()=>i(y).toBeEnabled()),await t.click(y),await d(()=>i(n.onSubmitEdits).toHaveBeenCalled()),await d(()=>i(a.getByRole("button",{name:"Edit Table"})).toBeInTheDocument(),{timeout:5e3})}},E={args:{objectType:u,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"jobTitle"},editable:e=>(e.jobTitle??"")==="Senior Product Manager"},{locator:{type:"property",id:"department"},editable:!0,editFieldConfig:{fieldComponent:"DROPDOWN",getFieldComponentProps:e=>({items:e.department==="Operations"?["Sales","Marketing"]:["Sales","Marketing","Finance","Human Resources"]})}}],editMode:"always",onCellValueChanged:C()},parameters:{docs:{description:{story:"Demonstrates per-row configuration with `editable` as a predicate function and dynamic `getFieldComponentProps` that computes dropdown items from the row's data. jobTitle is only editable for 'Senior Product Manager' rows. Department uses a dropdown that shows only 2 options for Operations rows"},source:{code:`const columnDefinitions = [
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
);`}}},render:e=>o.jsxs("div",{className:"object-table-container",style:{height:"600px"},children:[o.jsx("div",{style:{padding:"12px",backgroundColor:"#fff3cd",marginBottom:"8px",borderRadius:"4px"},children:'JobTitle is only editable for "Senior Product Manager" rows. Department dropdown shows only 2 options for Operations rows.'}),o.jsx(h,{...e})]}),play:async({canvasElement:e})=>{const n=r(e);await n.findByText(c);const a=r(b(n.getByText("Margaret Jackson"))).getAllByRole("cell");await i(a[1]).toHaveAttribute("data-editable","true");const p=r(b(n.getByText(c))).getAllByRole("cell");await i(p[1]).not.toHaveAttribute("data-editable");const s=b(n.getByText("William Liu"));await t.click(n.getByText("William Liu")),T.click(await r(s).findByRole("combobox")),await i(await m.findAllByRole("option")).toHaveLength(2),await i(m.queryByRole("option",{name:"Finance"})).not.toBeInTheDocument(),await t.keyboard("{Escape}");const l=b(n.getByText(c));await t.click(n.getByText(c)),T.click(await r(l).findByRole("combobox")),await i(await m.findByRole("option",{name:"Finance"})).toBeInTheDocument(),await t.keyboard("{Escape}"),await d(()=>i(m.queryByRole("option",{name:"Finance"})).not.toBeInTheDocument())}};var D,x,R;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(x=g.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var S,j,B;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(B=(j=f.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var P,F,O;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(F=w.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var k,N,I;E.parameters={...E.parameters,docs:{...(k=E.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(N=E.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const Ie=["EditableTable","EditableWithValidation","WithSubmitEditsButton","PerRowEditableAndFieldConfig"];export{g as EditableTable,f as EditableWithValidation,E as PerRowEditableAndFieldConfig,w as WithSubmitEditsButton,Ie as __namedExportsOrder,Ne as default};
