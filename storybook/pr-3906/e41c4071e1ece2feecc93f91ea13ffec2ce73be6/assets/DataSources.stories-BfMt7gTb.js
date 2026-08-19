import{j as r}from"./iframe--rzYILY1.js";import{O as b}from"./object-table-DhSxpquq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DNGY5dFj.js";import{u as g}from"./useOsdkClient-BXI2BlNL.js";import"./preload-helper-BeoTkHdu.js";import"./Table-DzFFLjM0.js";import"./index-C7zR2UNJ.js";import"./Dialog-BVahHRiG.js";import"./cross-CbDoZw20.js";import"./svgIconContainer-rHUXuI_K.js";import"./useBaseUiId-CJzyL5xl.js";import"./InternalBackdrop-DDU6QN5T.js";import"./composite-wxEI6Gek.js";import"./index-IixAyX6d.js";import"./index-DyzOhDxu.js";import"./index-B3Acx7FQ.js";import"./useEventCallback-DAUsfFl7.js";import"./SkeletonBar-C39RVMey.js";import"./LoadingCell-DnjC92Iq.js";import"./ColumnConfigDialog-BEEILKec.js";import"./DraggableList-DGg6uage.js";import"./search-BOHaXQRv.js";import"./Input-W1UxkG5_.js";import"./useControlled-CUByo0YB.js";import"./Button-Ca6sgk7W.js";import"./small-cross-5IbrPY9A.js";import"./ActionButton-DTFvEc2Q.js";import"./Checkbox-DzZyj33f.js";import"./useValueChanged-wsSi2Sqr.js";import"./CollapsiblePanel-MeX8aOQH.js";import"./MultiColumnSortDialog-DThzHeGE.js";import"./MenuTrigger-DQgayqZX.js";import"./CompositeItem-CuUYeQr-.js";import"./ToolbarRootContext-DCiiiRyC.js";import"./getDisabledMountTransitionStyles-DeoJOC7z.js";import"./getPseudoElementBounds-C__B5H3K.js";import"./chevron-down-DC1AxXPK.js";import"./index-CcfXgpac.js";import"./error-DmzjCkkr.js";import"./BaseCbacBanner-DRymUDrU.js";import"./makeExternalStore-BhwDVCaS.js";import"./Tooltip-DF3tMF-r.js";import"./PopoverPopup-BEYDlEoP.js";import"./debounce-DDNrjhdG.js";import"./tick-BIPZUYbM.js";import"./DropdownField-CRtOla0p.js";import"./isEqual-DSsAKU2O.js";import"./withOsdkMetrics-BbSTbtS6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
