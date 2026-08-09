import{j as r}from"./iframe-DhlbjbeZ.js";import{O as b}from"./object-table-C8nDhfH0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-COnFFcAi.js";import{u as g}from"./useOsdkClient-CeUHuBqw.js";import"./preload-helper-B3ZbJ-bP.js";import"./Table-embaBjrz.js";import"./index-kWv8s-4z.js";import"./Dialog-BGSHwo-W.js";import"./cross-B1OAvnP_.js";import"./svgIconContainer-BJqj6PDa.js";import"./useBaseUiId-B9Y_8LY0.js";import"./InternalBackdrop-CqmW82gT.js";import"./composite-C9hedtre.js";import"./index-t6f6IwGx.js";import"./index-BjXaHPcG.js";import"./index-CGRvi5ZA.js";import"./useEventCallback-BzDinzsO.js";import"./SkeletonBar-D6exssjq.js";import"./LoadingCell-DvngwTuw.js";import"./ColumnConfigDialog-C9Z118mT.js";import"./DraggableList-DsUyCW9A.js";import"./search-BIxqLZiv.js";import"./Input-D0rK2bUF.js";import"./useControlled-K9ko4WNA.js";import"./isEqual-BRxuW1NH.js";import"./isObject-B-pcJKyf.js";import"./Button-xxtzF2yJ.js";import"./ActionButton-CKZ-vgTW.js";import"./Checkbox-D5wg6kc_.js";import"./useValueChanged-Bs2x0KyM.js";import"./CollapsiblePanel-BNOg5Mz1.js";import"./MultiColumnSortDialog-L67CEFXN.js";import"./MenuTrigger-DEXLRaJ3.js";import"./CompositeItem-Bv4DEkpZ.js";import"./ToolbarRootContext-BvbVuNMG.js";import"./getDisabledMountTransitionStyles-2r_tzCMn.js";import"./getPseudoElementBounds-BBVTS-aJ.js";import"./chevron-down-CVGBo-H-.js";import"./index-CSOX7XNN.js";import"./error-DwtADrTi.js";import"./BaseCbacBanner-Bx0jmi4m.js";import"./makeExternalStore-CAKRXzbv.js";import"./Tooltip-C339oC4A.js";import"./PopoverPopup-Difabenz.js";import"./toNumber-B4WWmduY.js";import"./tick-sc-wTqG-.js";import"./DropdownField-S_rrnk6q.js";import"./withOsdkMetrics-DMzIZKlf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
