import{j as r}from"./iframe-BnQn1FlY.js";import{O as b}from"./object-table-BOdB6mRf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BjXpem2K.js";import{u as g}from"./useOsdkClient-BOzHXDv_.js";import"./preload-helper-BecbOaxr.js";import"./Table-DvIt_vn4.js";import"./index-CfSflYMd.js";import"./Dialog-BUoqfpGV.js";import"./cross-CQwrttsU.js";import"./svgIconContainer-C8CWCK4h.js";import"./useBaseUiId-D_n7SQSX.js";import"./InternalBackdrop-BK5BvcOi.js";import"./composite-D7QBQd-n.js";import"./index-TO_0y0N3.js";import"./index-C1lVCR7D.js";import"./index-BZF3QGqV.js";import"./useEventCallback-CFxdcXkp.js";import"./SkeletonBar-DABOfyFg.js";import"./LoadingCell-DIqxv0Br.js";import"./ColumnConfigDialog-BUyCrvE-.js";import"./DraggableList-C5z8YS9x.js";import"./search-DRs0Pqxh.js";import"./Input-DoQKk1PO.js";import"./useControlled-i3XBhDi5.js";import"./Button-DdWl47ZG.js";import"./small-cross-CIlPARtt.js";import"./ActionButton-D4YbdFWJ.js";import"./Checkbox-DMoofL04.js";import"./useValueChanged-DCL6nLeD.js";import"./CollapsiblePanel-7pS-YmLY.js";import"./MultiColumnSortDialog-BnrzMhSB.js";import"./MenuTrigger-4Ysk7jLT.js";import"./CompositeItem-DQ-KZaEd.js";import"./ToolbarRootContext-DpVEn9hT.js";import"./getDisabledMountTransitionStyles-mUbg0fsY.js";import"./getPseudoElementBounds-Btt2eHQG.js";import"./chevron-down-CBuocP3-.js";import"./index-CzWHx20P.js";import"./error-HPj_xS2_.js";import"./BaseCbacBanner-CMFVvGvU.js";import"./makeExternalStore-CydlKeaD.js";import"./Tooltip-CZ3Eb1De.js";import"./PopoverPopup-Dv1gHfMh.js";import"./debounce-C4XOemAw.js";import"./tick-ByOfPxOM.js";import"./DropdownField-CBQ5hYY4.js";import"./isEqual-zAekXAR7.js";import"./withOsdkMetrics-BE7G7j9y.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
