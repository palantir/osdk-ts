import{j as i}from"./iframe-C8k3uumS.js";import{O as p}from"./object-table-EZOB7GFm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CCyLoqCA.js";import"./preload-helper-Dj6SQCER.js";import"./Table-NqTGUUle.js";import"./index-Da9JAcME.js";import"./Dialog-DJIAnjKL.js";import"./cross-Dp2ox1xu.js";import"./svgIconContainer-Dj-Mm7D3.js";import"./useBaseUiId-DFXqCjvq.js";import"./InternalBackdrop-aU7kJmwR.js";import"./composite-DxAUAqur.js";import"./index-DzwHbvl0.js";import"./index-DjlNroqj.js";import"./index-DZnZB0mi.js";import"./useEventCallback-fbvYUM-2.js";import"./SkeletonBar-abAgXsnv.js";import"./LoadingCell-Tiia-8Ir.js";import"./ColumnConfigDialog-CmxDqqkp.js";import"./DraggableList-DgviW2i0.js";import"./search-DKEa9C8l.js";import"./Input--AleI5pt.js";import"./useControlled-C2PJbUNw.js";import"./Button-CBL5cv9S.js";import"./small-cross-Ce-hROYd.js";import"./ActionButton-BMUSg4X7.js";import"./Checkbox-B-gD_A1e.js";import"./useValueChanged-Dqs1inlY.js";import"./CollapsiblePanel-Dt19Mdgf.js";import"./MultiColumnSortDialog-mxFmSdR4.js";import"./MenuTrigger-C8wkes2i.js";import"./CompositeItem-DZbgQ7y8.js";import"./ToolbarRootContext-BVd3nTMD.js";import"./getDisabledMountTransitionStyles-DfVVkl0j.js";import"./getPseudoElementBounds-BPwV_7bA.js";import"./chevron-down-Biem--ni.js";import"./index-CEB9MiMS.js";import"./error-DgFxq49l.js";import"./BaseCbacBanner-CbsjZeyt.js";import"./makeExternalStore-Xdq9roG-.js";import"./Tooltip-BGHZdQle.js";import"./PopoverPopup-qnEIN4P4.js";import"./debounce-Nfw019PW.js";import"./useOsdkClient-BvDl_R1k.js";import"./tick-B-xbQpjH.js";import"./DropdownField-cT1ROS8v.js";import"./isEqual-DlqCCDtd.js";import"./withOsdkMetrics-zb3RyNQY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
