import{j as i}from"./iframe-2MyeaUzD.js";import{O as p}from"./object-table-LkCsGfkb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-6B0O5euU.js";import"./preload-helper-DUn0LkVX.js";import"./Table-DjOWDljB.js";import"./index-NZSVMLpP.js";import"./Dialog-CWDCbvJz.js";import"./cross-CXnhgyvc.js";import"./svgIconContainer-4EX1EfK4.js";import"./useBaseUiId-C0j-SKXM.js";import"./InternalBackdrop-COkt2S-3.js";import"./composite-BVz7tfSY.js";import"./index-Bm-PBo3A.js";import"./index-Ce4PKvPC.js";import"./index-DkVuFE1I.js";import"./useEventCallback-Dm3fVohy.js";import"./SkeletonBar-DIegnhq_.js";import"./LoadingCell-pnT9nXLW.js";import"./ColumnConfigDialog-CxlYZzEl.js";import"./DraggableList-D1634nan.js";import"./search-CpIfmgVn.js";import"./Input-DXMdlMds.js";import"./useControlled-DCne3Llm.js";import"./Button-3arTFTpt.js";import"./small-cross-Blk5AoHi.js";import"./ActionButton-CMwQlm1r.js";import"./Checkbox-B0hGpm5s.js";import"./useValueChanged-B2kp3VOe.js";import"./CollapsiblePanel-_qMM1pI0.js";import"./MultiColumnSortDialog-BbfjJS_D.js";import"./MenuTrigger-3uPegHGQ.js";import"./CompositeItem-D8KecaIg.js";import"./ToolbarRootContext-zLrFE9v8.js";import"./getDisabledMountTransitionStyles-DxjEMg4T.js";import"./getPseudoElementBounds-DpBykgdb.js";import"./chevron-down-4RG-YjeV.js";import"./index-jXeA9SgF.js";import"./error-CSdXVQDA.js";import"./BaseCbacBanner-QsJ11sde.js";import"./makeExternalStore-VoU3rgtf.js";import"./Tooltip-BfB-ALwV.js";import"./PopoverPopup-DOf8tSzj.js";import"./debounce-Y3DExDk1.js";import"./useOsdkClient-CYYcDDNv.js";import"./tick-ftcla-3R.js";import"./DropdownField-DOIFNVft.js";import"./isEqual-C8MbmCUf.js";import"./withOsdkMetrics-CFGA0PEe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
