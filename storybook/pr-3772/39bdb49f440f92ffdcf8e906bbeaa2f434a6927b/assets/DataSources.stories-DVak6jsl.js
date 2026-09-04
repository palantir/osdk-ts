import{j as r}from"./iframe-C8SPWzFD.js";import{O as b}from"./object-table-CEVvWNl8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DrmM__7i.js";import{u as g}from"./useOsdkClient-Gc4DZ-CV.js";import"./preload-helper-0-zjDLXH.js";import"./Table-Sy8XZYjj.js";import"./index-CGimpnDA.js";import"./Dialog-sJbwuz-W.js";import"./cross-yQkVXtk-.js";import"./svgIconContainer-B40AAOuO.js";import"./useBaseUiId-C57VmH3J.js";import"./InternalBackdrop-DxF2V30r.js";import"./composite-DPxUJccb.js";import"./index-VKcShZXo.js";import"./index-BwAo9-Ip.js";import"./index-DI8w2Wrl.js";import"./useEventCallback-DjuFsSbR.js";import"./SkeletonBar-o-eg2SlE.js";import"./LoadingCell-D10QJ8hN.js";import"./ColumnConfigDialog-DgDCdwV7.js";import"./DraggableList-DBkiK7wC.js";import"./search-bHMR0YBt.js";import"./Input-B7RJGze7.js";import"./useControlled-Yy6Nm7q-.js";import"./Button-BSl9QmF1.js";import"./small-cross-94u2Um9w.js";import"./ActionButton-BkWFOmHW.js";import"./Checkbox-DPCHiLIB.js";import"./useValueChanged-DPIPHUs8.js";import"./CollapsiblePanel-BSR-rgRE.js";import"./MultiColumnSortDialog-DM-SV7VS.js";import"./MenuTrigger-DYJhdpX_.js";import"./CompositeItem--Cz5F4Xa.js";import"./ToolbarRootContext-BVFmYY-d.js";import"./getDisabledMountTransitionStyles-XmNCU5wP.js";import"./getPseudoElementBounds-ckCn8Eoc.js";import"./chevron-down-C45MQu-J.js";import"./index-7TRVPqPj.js";import"./error-B5OE4NvJ.js";import"./BaseCbacBanner-WRiAVdzF.js";import"./makeExternalStore-C93JHYzf.js";import"./Tooltip-BOvX8lE8.js";import"./PopoverPopup-D5c_P4sS.js";import"./debounce-B5Hx5zW4.js";import"./tick-Dd7xtzHi.js";import"./DropdownField-C8LjKSnS.js";import"./isEqual-C4Xo_KzQ.js";import"./withOsdkMetrics-jd8u8gq8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
