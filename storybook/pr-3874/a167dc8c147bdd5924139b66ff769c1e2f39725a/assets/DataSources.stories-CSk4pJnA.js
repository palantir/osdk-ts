import{j as r}from"./iframe-De32S9Ga.js";import{O as b}from"./object-table-ChT8KK-b.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DBLMCbCB.js";import{u as g}from"./useOsdkClient-DNhQtFKx.js";import"./preload-helper-CnslaRhg.js";import"./Table-DZ-kSNFz.js";import"./index-Bj_BwatX.js";import"./Dialog-fioS3KUB.js";import"./cross-pDSvbI93.js";import"./svgIconContainer-CTp6Tyc8.js";import"./useBaseUiId-CbRyPa0L.js";import"./InternalBackdrop-BbY0GFNt.js";import"./composite-CbztnelA.js";import"./index-BwFeGDU0.js";import"./index-l7crMfe1.js";import"./index-qO0EUS8_.js";import"./useEventCallback-CDpcFHyr.js";import"./SkeletonBar-BNgaVvZy.js";import"./LoadingCell-_YEnWc0D.js";import"./ColumnConfigDialog-ZFOXQSGd.js";import"./DraggableList-Bfiy6KBe.js";import"./search-098G78gK.js";import"./Input-CEDW6O3n.js";import"./useControlled-NYQbyv_q.js";import"./Button-BDZ6lJNh.js";import"./small-cross-4_JDj4E8.js";import"./ActionButton-ZEMUf8VA.js";import"./Checkbox-DCzYgN4M.js";import"./useValueChanged-DYPi3RG6.js";import"./CollapsiblePanel-COxUzOWS.js";import"./MultiColumnSortDialog-Dn58cXos.js";import"./MenuTrigger-2yPw1UT7.js";import"./CompositeItem-B2LPoskN.js";import"./ToolbarRootContext-CPpFxoM9.js";import"./getDisabledMountTransitionStyles-B3CIL9HP.js";import"./getPseudoElementBounds-nkhrr1nH.js";import"./chevron-down-J7S6Qe54.js";import"./index-B2HMeMAA.js";import"./error-hRM0SKX8.js";import"./BaseCbacBanner-BhFsAW3f.js";import"./makeExternalStore-DEaEiUV0.js";import"./Tooltip-oc-LvP8h.js";import"./PopoverPopup-B5EHLRyL.js";import"./debounce-DZ86C2fz.js";import"./tick-6GF1bhlu.js";import"./DropdownField-Tnp49b1X.js";import"./isEqual-FRRCTjN8.js";import"./withOsdkMetrics-IZ1C7wJE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
