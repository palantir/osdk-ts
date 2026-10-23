import{j as r}from"./iframe-BRcpmwFv.js";import{O as b}from"./object-table-DZ0d4DEr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DcmSrFqo.js";import{u as g}from"./useOsdkClient-BUSM7w3V.js";import"./preload-helper-B5eDbs3J.js";import"./Table-Dx5TKSH0.js";import"./index-DK3oZ2G7.js";import"./Dialog-B2N7jv5R.js";import"./cross-C_YRX_a7.js";import"./svgIconContainer-BHIG5g_O.js";import"./useBaseUiId-BZpEg0W8.js";import"./InternalBackdrop-Bi_i6Gge.js";import"./composite-BLjliQ-J.js";import"./index-Droxy6Rm.js";import"./index-BnsjDL9p.js";import"./index-BlWG8r-Q.js";import"./useEventCallback-f3FFz_4C.js";import"./SkeletonBar-CwZnLaIO.js";import"./LoadingCell-OPmY-b4P.js";import"./ColumnConfigDialog-CrEC7igt.js";import"./DraggableList-DNhYzVQv.js";import"./search-DB_eRkJ7.js";import"./Input-DcIPWMXq.js";import"./useControlled-DbOKjk83.js";import"./Button-D8AxOjNK.js";import"./small-cross-DBM2r0BS.js";import"./ActionButton-BnrjjFOh.js";import"./Checkbox-gzFktAj8.js";import"./useValueChanged-DKSrxV4L.js";import"./CollapsiblePanel-BYDCF-xy.js";import"./MultiColumnSortDialog-CdwriShv.js";import"./MenuTrigger-v7hsXSxC.js";import"./CompositeItem-BjOjS-vj.js";import"./ToolbarRootContext-JjbSW9e7.js";import"./getDisabledMountTransitionStyles-D1N43ayV.js";import"./getPseudoElementBounds-C96XcGvW.js";import"./chevron-down-l6tBIHM5.js";import"./index-DqbNsSYI.js";import"./error-b3Z30HbN.js";import"./BaseCbacBanner-BhR8r3av.js";import"./makeExternalStore-CZ91arQK.js";import"./Tooltip-ZcVO_NEa.js";import"./PopoverPopup-Dh05gS4y.js";import"./debounce-DDQyBRU1.js";import"./tick-DxXZI3bo.js";import"./DropdownField-66rMfkM0.js";import"./isEqual-B89pKhWY.js";import"./withOsdkMetrics-Dwn_FNSW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
