import{j as r}from"./iframe-CY0l_yrm.js";import{O as b}from"./object-table-CScaSMmu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DJPT-Vz1.js";import{u as g}from"./useOsdkClient-Dpp4RHdN.js";import"./preload-helper-DND0VgR5.js";import"./Table-BDLWhByo.js";import"./index-jD6aOkFv.js";import"./Dialog-CObaXXeO.js";import"./cross-Cx7CV6yi.js";import"./svgIconContainer-CS1jdY6Z.js";import"./useBaseUiId-CnQ31eNT.js";import"./InternalBackdrop-DpYJb7P7.js";import"./composite-CtsMuCZE.js";import"./index-BwcD2Xpb.js";import"./index-CYc2nEZM.js";import"./index-B7EOaFV2.js";import"./useEventCallback-CuUylEqe.js";import"./SkeletonBar-DHnB17DS.js";import"./LoadingCell-lgq4p-2w.js";import"./ColumnConfigDialog-BBVV5egm.js";import"./DraggableList-BSKvp16K.js";import"./search-pW8689hu.js";import"./Input-BSPMw6pL.js";import"./useControlled-C5au6PDu.js";import"./Button-BSjQUjCf.js";import"./small-cross-Lb1xubsF.js";import"./ActionButton-DOh4jQXf.js";import"./Checkbox-DoBGOSNN.js";import"./useValueChanged-DZx2OgZD.js";import"./CollapsiblePanel-qW1X9ES0.js";import"./MultiColumnSortDialog-DzqQq3Hc.js";import"./MenuTrigger-LbHnUghE.js";import"./CompositeItem-CBwjlwAY.js";import"./ToolbarRootContext-CxL7mdgL.js";import"./getDisabledMountTransitionStyles-CP-qJ1MY.js";import"./getPseudoElementBounds-DAo1H6Bx.js";import"./chevron-down-CevA26oJ.js";import"./index-Bc195Ow-.js";import"./error-CvxyrBuz.js";import"./BaseCbacBanner-DM8VXmB6.js";import"./makeExternalStore-DLJSnM06.js";import"./Tooltip-CaHDHcXi.js";import"./PopoverPopup-DVUI0Hkh.js";import"./debounce-BZTVhNsm.js";import"./tick-D8A10Ahp.js";import"./DropdownField-BBmL-vGd.js";import"./isEqual-D3W4jYG0.js";import"./withOsdkMetrics-B5SRPOi7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
