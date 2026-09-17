import{j as r}from"./iframe-OjM1fGhD.js";import{O as b}from"./object-table-Bs7knEq4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DaVvcuaz.js";import{u as g}from"./useOsdkClient-CG8rDO26.js";import"./preload-helper-D7fi2uvl.js";import"./Table-DYtdHlhP.js";import"./index-CI4sblvN.js";import"./Dialog-COA8Sz2J.js";import"./cross-D69HQ2f-.js";import"./svgIconContainer-oX_Dupxj.js";import"./useBaseUiId-CUWfCekV.js";import"./InternalBackdrop-CvX7eefS.js";import"./composite-B2Qeod66.js";import"./index-DdpkN4AB.js";import"./index-DYYqOieW.js";import"./index-DZJYZ9CR.js";import"./useEventCallback-DPU1VIdY.js";import"./SkeletonBar-WHULGdS8.js";import"./LoadingCell-BnWSqwyd.js";import"./ColumnConfigDialog-piIcfzz1.js";import"./DraggableList-Dzx2s52t.js";import"./search-BhAcVZf9.js";import"./Input-DeCvr9l5.js";import"./useControlled-DrzgK2A0.js";import"./Button-BtiOWDEe.js";import"./small-cross-tNWYly7S.js";import"./ActionButton-Dab2pn_s.js";import"./Checkbox-DgQ6fnDP.js";import"./useValueChanged-BQlQj-qd.js";import"./CollapsiblePanel-CG8OLXdZ.js";import"./MultiColumnSortDialog-BIl-J-Sl.js";import"./MenuTrigger-C3KKugb7.js";import"./CompositeItem-Ddy0SGDP.js";import"./ToolbarRootContext-zAO6OvY5.js";import"./getDisabledMountTransitionStyles-CmzrHyFb.js";import"./getPseudoElementBounds-CRHH2PCz.js";import"./chevron-down-7rWKu4_j.js";import"./index-Cd3zzhVm.js";import"./error-q3Etsg6o.js";import"./BaseCbacBanner-BbaHTMrp.js";import"./makeExternalStore-C6aI4llN.js";import"./Tooltip-nVrA_o7L.js";import"./PopoverPopup-WCSstPUg.js";import"./debounce-3PyN9UKe.js";import"./tick-CLWn7BNG.js";import"./DropdownField-DQutHIXJ.js";import"./isEqual-XsRMCz9p.js";import"./withOsdkMetrics-DE164d5t.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
