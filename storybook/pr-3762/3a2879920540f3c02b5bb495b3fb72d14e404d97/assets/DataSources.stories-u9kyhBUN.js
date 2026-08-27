import{j as r}from"./iframe-C3sKw2cL.js";import{O as b}from"./object-table-1ngyaRdS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ByhSRpag.js";import{u as g}from"./useOsdkClient-CzcQ1v9M.js";import"./preload-helper-D7ozKbCq.js";import"./Table-DXkTtuoa.js";import"./index-wGL4M1dj.js";import"./Dialog-DNd7m5Gs.js";import"./cross-Bu18Q5FU.js";import"./svgIconContainer-C1lOjXyd.js";import"./useBaseUiId-DkTIqUVt.js";import"./InternalBackdrop-CREw7QLK.js";import"./composite-DODBKXpG.js";import"./index-BDLfxrJj.js";import"./index-s1MtgtJR.js";import"./index-BJGZijRP.js";import"./useEventCallback-NfZykPAO.js";import"./SkeletonBar-B8WHnp7i.js";import"./LoadingCell-BMKXKnNB.js";import"./ColumnConfigDialog-DNFVelbj.js";import"./DraggableList-Drc8YOGN.js";import"./search-BdUx-yB5.js";import"./Input-KoETOEYa.js";import"./useControlled-E83E5YYd.js";import"./Button-65aITwDG.js";import"./small-cross-C14IIHQX.js";import"./ActionButton-C6yfBQXX.js";import"./Checkbox-C7B1_vll.js";import"./useValueChanged-Dw0zLy25.js";import"./CollapsiblePanel-Pz8vokeW.js";import"./MultiColumnSortDialog-DntNNQJF.js";import"./MenuTrigger-CCVvE7kO.js";import"./CompositeItem-Bl2bPt1U.js";import"./ToolbarRootContext-jQ-Q_Ur2.js";import"./getDisabledMountTransitionStyles-D4BUlwZ6.js";import"./getPseudoElementBounds-CbXQ2lOM.js";import"./chevron-down-DFO6kUAt.js";import"./index-CS3EOsxC.js";import"./error-B2CSn4Mi.js";import"./BaseCbacBanner-DXG1qZE3.js";import"./makeExternalStore-CjpzJSnl.js";import"./Tooltip-CEzb1PKx.js";import"./PopoverPopup-Y5DzECwv.js";import"./debounce-DgY9oPON.js";import"./tick-BGf1Cc8_.js";import"./DropdownField-BF3n0ykt.js";import"./isEqual-COrmyPn8.js";import"./withOsdkMetrics-BIO2bqJF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
