import{j as r}from"./iframe-Cw1OzJXI.js";import{O as b}from"./object-table-BlvqIoek.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DC8-pkeb.js";import{u as g}from"./useOsdkClient-Dbtl-Pan.js";import"./preload-helper-VRjhiqdY.js";import"./Table-DO7lkPbv.js";import"./index-AdREiO06.js";import"./Dialog-CbtyUsmU.js";import"./cross-ByiNeePx.js";import"./svgIconContainer-CJz7g1GO.js";import"./useBaseUiId-kN-BHrn3.js";import"./InternalBackdrop-CIdeallu.js";import"./composite-DRnZZr1P.js";import"./index-I5TpdhWE.js";import"./index-BeY0cXRG.js";import"./index-2hLGIw1B.js";import"./useEventCallback-uoKbu4Qz.js";import"./SkeletonBar-DgfxUmTQ.js";import"./LoadingCell-CG_NKa2D.js";import"./ColumnConfigDialog-BmMKxIMW.js";import"./DraggableList-BqQahWmY.js";import"./search-B4Tj6n8T.js";import"./Input-D9ScyRrt.js";import"./useControlled-VUUaWxro.js";import"./isEqual-euZqodRa.js";import"./isObject-aq3xhs3E.js";import"./Button-UoOH76gu.js";import"./ActionButton-B01RMwt0.js";import"./Checkbox-CyI65MON.js";import"./useValueChanged-D5y9aqHu.js";import"./CollapsiblePanel-sIQ6S6_y.js";import"./MultiColumnSortDialog-Buq6GvoR.js";import"./MenuTrigger-BG0EgYHE.js";import"./CompositeItem-Wo-fO6cE.js";import"./ToolbarRootContext-D1YXlWsx.js";import"./getDisabledMountTransitionStyles-Ga8q-nXB.js";import"./getPseudoElementBounds-G7cdBYEe.js";import"./chevron-down-BF3wpGep.js";import"./index-Br682WIl.js";import"./error-DCuGKUxC.js";import"./BaseCbacBanner-BgGnqnzz.js";import"./makeExternalStore-Cti64u7E.js";import"./Tooltip-DPCzxURL.js";import"./PopoverPopup-Y3is10A5.js";import"./toNumber-lmVKIlAb.js";import"./tick-x37joSps.js";import"./DropdownField-DmLcWF-C.js";import"./withOsdkMetrics-uQ7KoVP0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
