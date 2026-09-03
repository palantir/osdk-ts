import{j as i}from"./iframe-D3l12Tr-.js";import{O as p}from"./object-table-nod7Wt-p.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B7cGW5ij.js";import"./preload-helper-PcHol1Ue.js";import"./Table-CyeovwFu.js";import"./index-BPiZlFJR.js";import"./Dialog-GF5Yno-p.js";import"./cross-C3J0WO3R.js";import"./svgIconContainer-CrW6rOVr.js";import"./useBaseUiId-BNJrpCWm.js";import"./InternalBackdrop-ziShhlZl.js";import"./composite-CuNBJcuu.js";import"./index-3OzYw8WP.js";import"./index-D9TP-Dik.js";import"./index-iaCxRYSZ.js";import"./useEventCallback-BeRbrn2J.js";import"./SkeletonBar-DjZej6tn.js";import"./LoadingCell-CjWQnUcs.js";import"./ColumnConfigDialog-DY6HW5pi.js";import"./DraggableList-ZYKcWFuZ.js";import"./search-CdpCaKTD.js";import"./Input-BOpnVUAt.js";import"./useControlled-DWcGrjw6.js";import"./Button-DSLUEzYm.js";import"./small-cross-BCEWKAxW.js";import"./ActionButton-DCUde49g.js";import"./Checkbox-Hfm8jSI2.js";import"./useValueChanged-CBUdNBJG.js";import"./CollapsiblePanel-Dm9vP2Y3.js";import"./MultiColumnSortDialog-B5g7AoHm.js";import"./MenuTrigger-DJMPc6Ab.js";import"./CompositeItem-BQJ1FDQm.js";import"./ToolbarRootContext-DbokOTWe.js";import"./getDisabledMountTransitionStyles-DsE80_5m.js";import"./getPseudoElementBounds-D46F0KDp.js";import"./chevron-down-C6Fq88S4.js";import"./index-ChSzKfO9.js";import"./error-CKivbg2c.js";import"./BaseCbacBanner-CP6kabxU.js";import"./makeExternalStore-CvkBuVLJ.js";import"./Tooltip-NvOXi5xg.js";import"./PopoverPopup-CkdVrScL.js";import"./debounce-BHUK5RQM.js";import"./useOsdkClient-0m55-sBo.js";import"./tick-Dx_ZSNZP.js";import"./DropdownField-CtgPUtSd.js";import"./isEqual-t_77Xxoc.js";import"./withOsdkMetrics-62C1cNRI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
