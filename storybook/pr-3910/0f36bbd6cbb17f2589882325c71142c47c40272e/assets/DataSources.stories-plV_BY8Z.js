import{j as r}from"./iframe-BJHQLm8B.js";import{O as b}from"./object-table-6Dmunot4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B-UtgZpp.js";import{u as g}from"./useOsdkClient-DHzp8GFD.js";import"./preload-helper-DNJi6hnI.js";import"./Table-0Gb2iOhx.js";import"./index-BUqmovkS.js";import"./Dialog-QIwxmnv_.js";import"./cross-DyhJ0eVv.js";import"./svgIconContainer-CExwBPXa.js";import"./useBaseUiId-DFBTpUkK.js";import"./InternalBackdrop-Ddz1w5Zi.js";import"./composite-BjkOmkjK.js";import"./index-CY3jAq3i.js";import"./index-BXhIsTqo.js";import"./index-nUnNg1dx.js";import"./useEventCallback-Dk3ZagH_.js";import"./SkeletonBar-BE2-lLRV.js";import"./LoadingCell-Dno7k0KU.js";import"./ColumnConfigDialog-dI9pN7C5.js";import"./DraggableList-CXkhvPtt.js";import"./search-CBF8qcQD.js";import"./Input--rxzAq78.js";import"./useControlled-91vTGa_9.js";import"./Button-hiBWk-nL.js";import"./small-cross-BaIKTF8-.js";import"./ActionButton-B06o1rGg.js";import"./Checkbox-DDOXzphd.js";import"./useValueChanged-Cznn-vr_.js";import"./CollapsiblePanel-BzpOhWpv.js";import"./MultiColumnSortDialog-jT1EKfyH.js";import"./MenuTrigger-74Ao9CwB.js";import"./CompositeItem-BhxoDlh7.js";import"./ToolbarRootContext-0Z3xHtAl.js";import"./getDisabledMountTransitionStyles-CygFqHiI.js";import"./getPseudoElementBounds-CLRJGPDW.js";import"./chevron-down-DOmpjpbt.js";import"./index-mWeNCZ3t.js";import"./error-msvagv_9.js";import"./BaseCbacBanner-DMhFZWt0.js";import"./makeExternalStore-CZ09MAHK.js";import"./Tooltip-DzCNOI3d.js";import"./PopoverPopup-VghyVGFq.js";import"./debounce-DLKN_1JY.js";import"./tick-pYb3XQje.js";import"./DropdownField-BmtwaVlS.js";import"./isEqual-BlhDqGkk.js";import"./withOsdkMetrics-CQ4A9sKP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
