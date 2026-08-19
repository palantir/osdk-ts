import{j as r}from"./iframe-B_x9XvmG.js";import{O as b}from"./object-table-l5ZKxGcv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DldcP3pD.js";import{u as g}from"./useOsdkClient-CBHc-CmL.js";import"./preload-helper-DITc7NUo.js";import"./Table-BxY4gdLK.js";import"./index-C3PElE5z.js";import"./Dialog-QLZadL9p.js";import"./cross-CXaMbnSI.js";import"./svgIconContainer-D4Odc14H.js";import"./useBaseUiId-BiDC3o6s.js";import"./InternalBackdrop-xOer-FmO.js";import"./composite-BZvFUogL.js";import"./index-BLoCQL3a.js";import"./index-BBIYY3UR.js";import"./index-dzoRTbgc.js";import"./useEventCallback-CTv-Axwi.js";import"./SkeletonBar-BsXsv3-p.js";import"./LoadingCell-CjCa9wK8.js";import"./ColumnConfigDialog-D59UQMdg.js";import"./DraggableList-dwa4l-3n.js";import"./search-DnO_YLk6.js";import"./Input-CrrumfsJ.js";import"./useControlled-CmgwpyDU.js";import"./Button-C6ny7jzS.js";import"./small-cross-DvnB8WJm.js";import"./ActionButton-ByK1EtK2.js";import"./Checkbox-BZHsgA9m.js";import"./useValueChanged-CInVWb7b.js";import"./CollapsiblePanel-DrJyDo7E.js";import"./MultiColumnSortDialog-B8T_q1dR.js";import"./MenuTrigger-B0tpP2Ga.js";import"./CompositeItem-C9DYqB7p.js";import"./ToolbarRootContext-7JgjqYNy.js";import"./getDisabledMountTransitionStyles-DoJBgGot.js";import"./getPseudoElementBounds-yhz1puC4.js";import"./chevron-down-Cacce87-.js";import"./index-wwXQ8xo5.js";import"./error-CpyC-KmL.js";import"./BaseCbacBanner-6ECyv6vF.js";import"./makeExternalStore-BY--bFis.js";import"./Tooltip-C9TvRN4R.js";import"./PopoverPopup-BI1Nn7oq.js";import"./debounce-BIWVV4l_.js";import"./tick-CeNcKQ7_.js";import"./DropdownField-sX4nPjva.js";import"./isEqual-BbGOrC67.js";import"./withOsdkMetrics-BwmTGSf3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
