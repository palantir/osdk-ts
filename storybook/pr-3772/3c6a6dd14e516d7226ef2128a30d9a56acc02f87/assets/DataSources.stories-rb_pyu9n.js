import{j as r}from"./iframe-DejlptTF.js";import{O as b}from"./object-table-X3qHvYRl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-26X3BaJj.js";import{u as g}from"./useOsdkClient-Be6GpiDW.js";import"./preload-helper-t1ZC-fSO.js";import"./Table-D6t_1smO.js";import"./index-DeuG-BID.js";import"./Dialog-DtGIMPew.js";import"./cross-DE57w2Hx.js";import"./svgIconContainer-Bd-w9OF2.js";import"./useBaseUiId-DNOeS8k3.js";import"./InternalBackdrop-BegRmqYV.js";import"./composite-CgiNKm-K.js";import"./index-CbKeSWV-.js";import"./index-e8F5O9eW.js";import"./index-DmUvwc9j.js";import"./useEventCallback-DySuSceI.js";import"./SkeletonBar-Jnqmj5L9.js";import"./LoadingCell-BFjRur3u.js";import"./ColumnConfigDialog-CYgd3IBW.js";import"./DraggableList-C61bLq-a.js";import"./search-BB5SHFcx.js";import"./Input-BNct-weu.js";import"./useControlled-u0rXshqK.js";import"./Button-S0WXhUVU.js";import"./small-cross-BAi3Ugk-.js";import"./ActionButton-D5ovP9h8.js";import"./Checkbox-1CEuwEgy.js";import"./useValueChanged-Co9qYG2g.js";import"./CollapsiblePanel-whmM-HlO.js";import"./MultiColumnSortDialog-CQlHX6VX.js";import"./MenuTrigger-CY0lgVVo.js";import"./CompositeItem-C668gbIC.js";import"./ToolbarRootContext-hKTjuFFe.js";import"./getDisabledMountTransitionStyles-DARBSl-L.js";import"./getPseudoElementBounds-B3xcbhps.js";import"./chevron-down-R85fLGon.js";import"./index-CLFPBot-.js";import"./error-ClnW0JkG.js";import"./BaseCbacBanner-DiDBq870.js";import"./makeExternalStore-DzmCjszS.js";import"./Tooltip-D7gI9ZpI.js";import"./PopoverPopup-DUkO6HuE.js";import"./debounce-fU7KH6yO.js";import"./tick-CSsKr-Cj.js";import"./DropdownField-BgflIuYE.js";import"./isEqual-CStHxz3-.js";import"./withOsdkMetrics-CAm6PF-7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
