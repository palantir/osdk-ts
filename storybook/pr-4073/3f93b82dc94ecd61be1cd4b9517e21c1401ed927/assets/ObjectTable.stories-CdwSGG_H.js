import{j as i}from"./iframe-C-vShDHk.js";import{O as p}from"./object-table-ChrRlk4s.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cfgu4nbH.js";import"./preload-helper-B2rWRkvC.js";import"./Table-B-E2plp_.js";import"./index-Cx2OgQ-2.js";import"./Dialog-c6L8ABWv.js";import"./cross-CPOUhrWH.js";import"./svgIconContainer-BXOzj86j.js";import"./useBaseUiId-CVgLKRhh.js";import"./InternalBackdrop-XSBRP9bo.js";import"./composite-BHa_u3nf.js";import"./index-D6DLWMjA.js";import"./index-MAhWZ1KQ.js";import"./index-qTup-brw.js";import"./useEventCallback-CQwRrFQE.js";import"./SkeletonBar-CHZBGodV.js";import"./LoadingCell-ZDStc1Dy.js";import"./ColumnConfigDialog-BiTzBvDJ.js";import"./DraggableList-DOWz5RYu.js";import"./search-D9klcMPO.js";import"./Input-ChQ78XH9.js";import"./useControlled-TStxGFbD.js";import"./Button-LZsipjsn.js";import"./small-cross-BX5QWifh.js";import"./ActionButton-DSWfmCy7.js";import"./Checkbox-9FOAFIbY.js";import"./useValueChanged-CG5ViM36.js";import"./CollapsiblePanel-CaYYpdck.js";import"./MultiColumnSortDialog-Cu9UF0CN.js";import"./MenuTrigger-DVSsQF8F.js";import"./CompositeItem-DCzVtAix.js";import"./ToolbarRootContext-JfRNTAAS.js";import"./getDisabledMountTransitionStyles-C4qD4WmU.js";import"./getPseudoElementBounds-BF0_fsUP.js";import"./chevron-down-BslLGd1l.js";import"./index-B5-Rp7Tt.js";import"./error-Dym_fJRU.js";import"./BaseCbacBanner-BLl3LiWg.js";import"./makeExternalStore-ChsmDhDe.js";import"./Tooltip-BVcNQFLP.js";import"./PopoverPopup-OKdPLocf.js";import"./debounce-Bbzc0_G8.js";import"./useOsdkClient-DoM56k-f.js";import"./tick-DHJZpSr9.js";import"./DropdownField-8AdR6NdB.js";import"./isEqual-DMj38Apr.js";import"./withOsdkMetrics-195aR8r9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
