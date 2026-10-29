import{j as r}from"./iframe-Bl044qnf.js";import{O as b}from"./object-table-JJMjZish.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-4nKdeJg5.js";import{u as g}from"./useOsdkClient-Bq33Z6Hs.js";import"./preload-helper-C3nN8OhV.js";import"./Table-CkzyBY8f.js";import"./index-DUYD1b1T.js";import"./Dialog-BzLfCMxE.js";import"./cross-ByJxUK15.js";import"./svgIconContainer-DSPSIjCL.js";import"./useBaseUiId-D3Tkd5iy.js";import"./InternalBackdrop-DANcJBrc.js";import"./composite-BKeFyTtn.js";import"./index-BIw9TA11.js";import"./index-DOFCbist.js";import"./useEventCallback-B7Mw4f_q.js";import"./SkeletonBar-CV-952J8.js";import"./LoadingCell-DTjUTQFN.js";import"./ColumnConfigDialog-DaZ6T4n3.js";import"./DraggableList-CZvm2x-q.js";import"./search-DOyb79Ba.js";import"./Input-Dn6FdMxP.js";import"./useControlled-DWQwydBz.js";import"./Button-BeSccTOh.js";import"./small-cross-CtOoCFP2.js";import"./ActionButton-D2CjWZmo.js";import"./Checkbox-CvIBXNa-.js";import"./useValueChanged-C0GZ5aIg.js";import"./CollapsiblePanel-Drqn5TA4.js";import"./MultiColumnSortDialog-FkCgv7b1.js";import"./MenuTrigger-Dnxiprn0.js";import"./CompositeItem-CkPEHO5z.js";import"./ToolbarRootContext-Btm4cFoY.js";import"./getDisabledMountTransitionStyles-p_ATdOqC.js";import"./getPseudoElementBounds-Bmt56FKU.js";import"./chevron-down-DCr-eUT2.js";import"./index-DPpCb37f.js";import"./error-TWIHte5e.js";import"./BaseCbacBanner-CunkN0nl.js";import"./makeExternalStore-DPNkNH3X.js";import"./Tooltip-CVK2DOVB.js";import"./PopoverPopup-D3VJPyhs.js";import"./debounce-CjvDom3d.js";import"./tick-CyfQwmIO.js";import"./DropdownField-BEqOqzm_.js";import"./isEqual-CPfrUQ7O.js";import"./withOsdkMetrics-DEGSIMfx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
