import{j as r}from"./iframe-DFLNqEm2.js";import{O as b}from"./object-table-BzCwhrP9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ukc0X1W_.js";import{u as g}from"./useOsdkClient-ENy8kaW0.js";import"./preload-helper-C4OJk57-.js";import"./Table-Csirv5fL.js";import"./index-fk_tQ1YC.js";import"./Dialog-CfKlKKmV.js";import"./cross-DMqxAY0f.js";import"./svgIconContainer-5792X2so.js";import"./useBaseUiId-f39Vd-uF.js";import"./InternalBackdrop-DsVJKrRk.js";import"./composite-luK9vRGl.js";import"./index-CA9B81mf.js";import"./index-BJjObxmA.js";import"./index-DEOn4aKD.js";import"./useEventCallback-D63bKoHu.js";import"./SkeletonBar-BOr5ioOf.js";import"./LoadingCell-DPPwvS8w.js";import"./ColumnConfigDialog-aRCbvdi3.js";import"./DraggableList-D3byIqUN.js";import"./search-LoblqU0W.js";import"./Input-CsKqmdcW.js";import"./useControlled-BgQ6tJlm.js";import"./Button-BbpsJ4er.js";import"./small-cross-CBeD8iwS.js";import"./ActionButton-B5J36pLX.js";import"./Checkbox-D53VBo_9.js";import"./useValueChanged-C-TRa-z8.js";import"./CollapsiblePanel-C7HlC61M.js";import"./MultiColumnSortDialog-ATzrXawV.js";import"./MenuTrigger-c_Jrk9MS.js";import"./CompositeItem-DHZAlp7N.js";import"./ToolbarRootContext-CH5CakMV.js";import"./getDisabledMountTransitionStyles-Czp6bpN4.js";import"./getPseudoElementBounds-Br4mtL1e.js";import"./chevron-down-CHUZ5wYq.js";import"./index-j4zmBLn_.js";import"./error-C8Ukd2CZ.js";import"./BaseCbacBanner-BeddFxq4.js";import"./makeExternalStore-Coy-sieI.js";import"./Tooltip-QrcynOTk.js";import"./PopoverPopup-CS5MDXSc.js";import"./debounce-B-uclRIy.js";import"./tick-DZ_zylkj.js";import"./DropdownField-DhjuDgoz.js";import"./isEqual-BUPfKLFl.js";import"./withOsdkMetrics-BaDAnBzc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
