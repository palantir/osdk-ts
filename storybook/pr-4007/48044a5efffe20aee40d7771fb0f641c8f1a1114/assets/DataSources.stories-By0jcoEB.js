import{j as r}from"./iframe-CZuJk2mr.js";import{O as b}from"./object-table-Sr4UqiK-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B819xDB8.js";import{u as g}from"./useOsdkClient-BPa-6pZZ.js";import"./preload-helper-D-OLzWEl.js";import"./Table-CiJXIyql.js";import"./index-DDksSLCw.js";import"./Dialog-Cu0NEvtn.js";import"./cross-cMU2e2iq.js";import"./svgIconContainer-D_03U5sn.js";import"./useBaseUiId-oT1O9JCt.js";import"./InternalBackdrop-D7By8IzE.js";import"./composite-sxVd7y-x.js";import"./index-Db51obv8.js";import"./index-CwqMcoP9.js";import"./index-CchHo8N5.js";import"./useEventCallback-C-Y_eJLU.js";import"./SkeletonBar-KIkU-F0P.js";import"./LoadingCell-Dy5QT2-j.js";import"./ColumnConfigDialog-BJnqXzXJ.js";import"./DraggableList-DMKsNBrH.js";import"./search-2YrO29UM.js";import"./Input-CRD7X-5R.js";import"./useControlled-Bv0HDfXo.js";import"./Button-8AWdZuBH.js";import"./small-cross-Cks8he4h.js";import"./ActionButton-Y1hJnLuM.js";import"./Checkbox-BHgBtR90.js";import"./useValueChanged-B3gY-jcJ.js";import"./CollapsiblePanel-BSzHq4mN.js";import"./MultiColumnSortDialog-CoP8N9Nr.js";import"./MenuTrigger-DpjNDmx1.js";import"./CompositeItem-CuTnwCK-.js";import"./ToolbarRootContext-DCv4bsB-.js";import"./getDisabledMountTransitionStyles-wKWoptbs.js";import"./getPseudoElementBounds-B7h64O9N.js";import"./chevron-down-CxdBBEPV.js";import"./index-J1vMkA6U.js";import"./error-BX22AwHJ.js";import"./BaseCbacBanner-Cdj36LJA.js";import"./makeExternalStore-BxStD-Ll.js";import"./Tooltip-pvJM2LHO.js";import"./PopoverPopup-Cbun7Jdd.js";import"./debounce-BD5a1j86.js";import"./tick-DsvM9X65.js";import"./DropdownField-v7pGuAWY.js";import"./isEqual-xDcqCKe9.js";import"./withOsdkMetrics-D7T9qYjs.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
