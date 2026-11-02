import{j as r}from"./iframe-DSFURlDA.js";import{O as b}from"./object-table-UUemqtA3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BFAK8CYJ.js";import{u as g}from"./useOsdkClient-B7Ec3XZP.js";import"./preload-helper-B1VAjeN0.js";import"./Table-D-44ggYt.js";import"./index-n2cVRLUV.js";import"./Dialog-CH-s4w18.js";import"./cross-BfC9nIFZ.js";import"./svgIconContainer-DdvBD_9a.js";import"./useBaseUiId-CPQbMaU1.js";import"./InternalBackdrop-i93WBNhG.js";import"./composite-zLymdlB4.js";import"./index-DEWyNal3.js";import"./index-DatMcuFW.js";import"./index-1g8QVa9w.js";import"./useEventCallback-D-jfKQ1Z.js";import"./SkeletonBar-BAkRYcYG.js";import"./LoadingCell-BD5eCvTL.js";import"./ColumnConfigDialog-wvEfUZ8D.js";import"./DraggableList-CM0711ve.js";import"./search-BUp5dxQj.js";import"./Input-TT4Euawv.js";import"./useControlled-C2QQWcpQ.js";import"./Button-B9oX6qDj.js";import"./small-cross-1OkFxGzR.js";import"./ActionButton-63CS6rUE.js";import"./Checkbox-DrDolBYQ.js";import"./useValueChanged-CboUDFgk.js";import"./CollapsiblePanel-7-q3gSlS.js";import"./MultiColumnSortDialog-Dm-0rn5u.js";import"./MenuTrigger-idfC3K8M.js";import"./CompositeItem-4TlbRyqO.js";import"./ToolbarRootContext-D4dmc43x.js";import"./getDisabledMountTransitionStyles-C6-Suj3S.js";import"./getPseudoElementBounds-B4-845mD.js";import"./chevron-down-DT3G6LtT.js";import"./index-ojfPVnys.js";import"./error-DUIlp0md.js";import"./BaseCbacBanner-Bomlyg8i.js";import"./makeExternalStore-DipsHuCX.js";import"./Tooltip-D-FrCqJr.js";import"./PopoverPopup-BM6OifUC.js";import"./debounce-BCr80lUe.js";import"./tick-Bd1kaq1w.js";import"./DropdownField-Ewv0QYli.js";import"./isEqual-DjH9X7M3.js";import"./withOsdkMetrics-CcZF-o22.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
