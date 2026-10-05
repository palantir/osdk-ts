import{j as i}from"./iframe-axSYt9jb.js";import{O as p}from"./object-table-CJL2jtUP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DQe9xJE3.js";import"./preload-helper-5clZkVbz.js";import"./Table-wLjkHKgy.js";import"./index-CLjZOMbp.js";import"./Dialog-Dx3n6IVE.js";import"./cross-BV4PjvJc.js";import"./svgIconContainer-CvOpWe1G.js";import"./useBaseUiId-CfampI5m.js";import"./InternalBackdrop-73Bsxdw-.js";import"./composite-G1l_cMk8.js";import"./index-DpGvCUsF.js";import"./index-6T9wCtxW.js";import"./index-DNBA_y2P.js";import"./useEventCallback-BY8e2U_8.js";import"./SkeletonBar-ClNzeAGH.js";import"./LoadingCell-L-L7aGt4.js";import"./ColumnConfigDialog-BIWB67f-.js";import"./DraggableList-BRobuV8K.js";import"./search-B_GR0Y0K.js";import"./Input-nobTN-9C.js";import"./useControlled-BSRNruV1.js";import"./Button-DBXdKKko.js";import"./small-cross-4Md-SBDX.js";import"./ActionButton-BPhZ5AgD.js";import"./Checkbox-CFxX--nm.js";import"./useValueChanged-BLlZH5mo.js";import"./CollapsiblePanel-Dmb31jh2.js";import"./MultiColumnSortDialog-D4YjYgTK.js";import"./MenuTrigger-BRfJLqNl.js";import"./CompositeItem-E4JqZHrS.js";import"./ToolbarRootContext-HNR9-LxP.js";import"./getDisabledMountTransitionStyles-5OnvXmo8.js";import"./getPseudoElementBounds-Bw-YTuG9.js";import"./chevron-down-BijfbkW5.js";import"./index-iV2cA45t.js";import"./error-dOvZleMr.js";import"./BaseCbacBanner-D9H1tQlA.js";import"./makeExternalStore-7VGeqAOs.js";import"./Tooltip-CqT7nzyV.js";import"./PopoverPopup-Smoy6HlE.js";import"./debounce-eexPevCv.js";import"./useOsdkClient-DIUBL3TL.js";import"./tick-BUmA3zHD.js";import"./DropdownField-CLQ_cIrg.js";import"./isEqual-xmdt4oBy.js";import"./withOsdkMetrics-DSBcYRdu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
