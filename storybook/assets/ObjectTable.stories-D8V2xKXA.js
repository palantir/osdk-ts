import{j as i}from"./iframe-DqbKZIsj.js";import{O as p}from"./object-table-CR-UP_kA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CzcJ88pc.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BaHtU0D_.js";import"./index-CVHMDurZ.js";import"./Dialog-Cv8zaBKu.js";import"./cross-Z2gUdKwX.js";import"./svgIconContainer-C4ng68oA.js";import"./useBaseUiId-BxNdDlhM.js";import"./InternalBackdrop-BejVrM6e.js";import"./composite-CX6gxRms.js";import"./index-DtlYlCBm.js";import"./index-BUCimpxE.js";import"./index-aYLuQAZl.js";import"./useEventCallback-LvBJYhlK.js";import"./SkeletonBar-DhzNvacg.js";import"./LoadingCell-CDhooj-2.js";import"./ColumnConfigDialog-BKZebYiT.js";import"./DraggableList-BwF4LDSf.js";import"./search-ufs3MxrA.js";import"./Input-DmzqPdUu.js";import"./useControlled-C0WeE-L2.js";import"./Button-BC-fUx3I.js";import"./small-cross-CsjkfVfk.js";import"./ActionButton-DHfZ5rN_.js";import"./Checkbox-30y4v_I4.js";import"./useValueChanged-DHt_F6Hq.js";import"./CollapsiblePanel-7ZJCLX4Q.js";import"./MultiColumnSortDialog-7cpJmSbW.js";import"./MenuTrigger-Cnb-E0TQ.js";import"./CompositeItem-D-1eywNB.js";import"./ToolbarRootContext-oWhh6x6s.js";import"./getDisabledMountTransitionStyles-DvpJWcms.js";import"./getPseudoElementBounds-2xfbxDVQ.js";import"./chevron-down-B6ifOWAI.js";import"./index-BAbFdJDq.js";import"./error-Deq2jp5x.js";import"./BaseCbacBanner-DZtkZFYO.js";import"./makeExternalStore-u9ldSa0C.js";import"./Tooltip-brJy3d_r.js";import"./PopoverPopup-BRb7_hfX.js";import"./toNumber-CyExNU-I.js";import"./useOsdkClient-QdLqV_Hm.js";import"./tick-CwDsMdmM.js";import"./DropdownField-4Su-OStc.js";import"./withOsdkMetrics-BY3qMARX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
