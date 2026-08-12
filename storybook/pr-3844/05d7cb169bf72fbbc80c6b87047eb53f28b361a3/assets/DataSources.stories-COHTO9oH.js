import{j as r}from"./iframe-Bzfl0edf.js";import{O as b}from"./object-table-D216D20g.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BLwY4Y7V.js";import{u as g}from"./useOsdkClient-DujXvWiF.js";import"./preload-helper-B208VeDC.js";import"./Table-DXSJ4WFA.js";import"./index-CGVuXL6A.js";import"./Dialog-CPM6XpIW.js";import"./cross-CwTbRfdE.js";import"./svgIconContainer-Bnp_lIJz.js";import"./useBaseUiId-BJ8-iUbP.js";import"./InternalBackdrop-CdbgxrW_.js";import"./composite-C_lr7yXh.js";import"./index-CE0CDnbM.js";import"./index-Cqab7N-9.js";import"./index-qzBl6Ep6.js";import"./useEventCallback-EOEACuMH.js";import"./SkeletonBar-C8tmxbP7.js";import"./LoadingCell-Dvs5FgLo.js";import"./ColumnConfigDialog-BKNxlBbv.js";import"./DraggableList-BXsQGjpA.js";import"./search-qz1hnUVF.js";import"./Input-DisgP7IF.js";import"./useControlled-B36barjX.js";import"./isEqual-GJ2Dy3Gk.js";import"./isObject-p0Q0wz6R.js";import"./Button-fO_zAq5Q.js";import"./ActionButton-vIk83ayf.js";import"./Checkbox-CpngCqKq.js";import"./useValueChanged-TLybF-Yx.js";import"./CollapsiblePanel-Db1KUj0x.js";import"./MultiColumnSortDialog-D0k5O__9.js";import"./MenuTrigger-DliGnZwA.js";import"./CompositeItem-DlE9RLJl.js";import"./ToolbarRootContext-Dh6jr3zV.js";import"./getDisabledMountTransitionStyles-CuUAObkc.js";import"./getPseudoElementBounds-WRyicApX.js";import"./chevron-down-5xkKqCSO.js";import"./index-UVAOyVXG.js";import"./error-SO7gTkQm.js";import"./BaseCbacBanner-CNZkkluW.js";import"./makeExternalStore-Csana1x2.js";import"./Tooltip-vMXuTZw0.js";import"./PopoverPopup-CBy6YPRB.js";import"./toNumber-DVRarxex.js";import"./tick-BGV2o7PZ.js";import"./DropdownField-ErWCEAWu.js";import"./withOsdkMetrics-Cb6Jf2gD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
