import{j as r}from"./iframe-SRdlKq9b.js";import{O as b}from"./object-table-CojfwMaQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BmWOAm6k.js";import{u as g}from"./useOsdkClient-jZoOvTCC.js";import"./preload-helper-s1eLnSv0.js";import"./Table-Ck3px7xM.js";import"./index-DD8FCudr.js";import"./Dialog-C_6idqLc.js";import"./cross-CXZKrh1h.js";import"./svgIconContainer-BcXM3VSp.js";import"./useBaseUiId-B4J9k2RX.js";import"./InternalBackdrop-DZ5UfCCc.js";import"./composite-CZ2o_96f.js";import"./index-B4jPuaLR.js";import"./index-Dji29e1U.js";import"./index-Cn9jOaaC.js";import"./useEventCallback-DlExu_x9.js";import"./SkeletonBar-2487SD1x.js";import"./LoadingCell-BO1-xQ-u.js";import"./ColumnConfigDialog-BzKmQdLo.js";import"./DraggableList-Bq9_-0P2.js";import"./search-BIvi-2TY.js";import"./Input-DAJATtsq.js";import"./useControlled-wCYPw1x7.js";import"./Button-D5IcZbYw.js";import"./small-cross-L_-ELWme.js";import"./ActionButton-C63e1YEm.js";import"./Checkbox-DtjMKN4T.js";import"./useValueChanged-BTouMuh0.js";import"./CollapsiblePanel-B-UdhI4G.js";import"./MultiColumnSortDialog-Cvq3CdhN.js";import"./MenuTrigger-BLJI1uk0.js";import"./CompositeItem-CxO1LzKy.js";import"./ToolbarRootContext-D6KNZ6Ak.js";import"./getDisabledMountTransitionStyles-Bgi2j66A.js";import"./getPseudoElementBounds-CJTp5fJ0.js";import"./chevron-down--GHDODIE.js";import"./index-DhMuGg7E.js";import"./error-DFAQrfbx.js";import"./BaseCbacBanner-SCqPc3nk.js";import"./makeExternalStore-gzodh6iV.js";import"./Tooltip-CWTCUjbr.js";import"./PopoverPopup-qEnUheAt.js";import"./debounce-wqarF4Vc.js";import"./tick-DneUhZ2Q.js";import"./DropdownField-BkOAd7gw.js";import"./isEqual-DV_ZUJF1.js";import"./withOsdkMetrics-jgsXWTD0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
