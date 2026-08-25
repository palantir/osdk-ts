import{j as i}from"./iframe-DRjBmUXS.js";import{O as p}from"./object-table-CCujxvTS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DN1DjcL0.js";import"./preload-helper-DgOWrW9h.js";import"./Table-DIwzOFSU.js";import"./index-D6qvYW_s.js";import"./Dialog-CjgHm-ts.js";import"./cross-3MnbZVbU.js";import"./svgIconContainer-Bh_w5Xfd.js";import"./useBaseUiId-WS17y9nt.js";import"./InternalBackdrop-Bcffkz1I.js";import"./composite-rGdZym8a.js";import"./index-BCESHM1K.js";import"./index-BOS5xdCe.js";import"./index-DPmkOngm.js";import"./useEventCallback-CWAgAbba.js";import"./SkeletonBar-D8YwKkFm.js";import"./LoadingCell-DCOMCNJj.js";import"./ColumnConfigDialog-8AJxfk8z.js";import"./DraggableList-DavVEhSF.js";import"./search-MPXqFORa.js";import"./Input-CDPW84Vd.js";import"./useControlled-sU745DGU.js";import"./Button-DE-Hu3dt.js";import"./small-cross-bWZnL7uz.js";import"./ActionButton-B1rhz0DA.js";import"./Checkbox-Cb6JSpK5.js";import"./useValueChanged-Dx083Fm3.js";import"./CollapsiblePanel-0e12BKeC.js";import"./MultiColumnSortDialog-BOhzgl61.js";import"./MenuTrigger-CNDXy2T4.js";import"./CompositeItem-Do0rCuoU.js";import"./ToolbarRootContext-Br9U1Q2_.js";import"./getDisabledMountTransitionStyles-BCbQnbBn.js";import"./getPseudoElementBounds-BkSPJz-P.js";import"./chevron-down-CFfBUDSH.js";import"./index-BVJlzR67.js";import"./error-NWnnz2CJ.js";import"./BaseCbacBanner-ClEgVWlR.js";import"./makeExternalStore-BkV80SHH.js";import"./Tooltip-DRP5x062.js";import"./PopoverPopup-CSPtAVJ4.js";import"./debounce-BDfyeiE3.js";import"./useOsdkClient-C1Jd3b7W.js";import"./tick-BlmFJVFO.js";import"./DropdownField-BM-ngSf_.js";import"./isEqual-CmUf4hUZ.js";import"./withOsdkMetrics-BBE1IHfP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
