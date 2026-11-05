import{j as i}from"./iframe-BA-BTX3-.js";import{O as p}from"./object-table-DJTS9wrk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ds7OGiCA.js";import"./preload-helper-C5CDmGBs.js";import"./Table-C_2lHXzU.js";import"./index-CLtmtywH.js";import"./Dialog-yKAqP5Qg.js";import"./cross-D4r7ZnVQ.js";import"./svgIconContainer-Dgy3GTZl.js";import"./useBaseUiId-BfS85IZC.js";import"./InternalBackdrop-BRtp06hW.js";import"./composite-CTuwrQcp.js";import"./index-CHEuFMH1.js";import"./index-PipwlUCm.js";import"./index-BwCVEmQa.js";import"./useEventCallback-LqHpjxlt.js";import"./SkeletonBar-BFsZEIKo.js";import"./LoadingCell-eIOm7TzJ.js";import"./ColumnConfigDialog-DvQseXxN.js";import"./DraggableList-DmkMX12O.js";import"./search-DGIpilYo.js";import"./Input-BeTQsBeq.js";import"./useControlled-UrjDpzSo.js";import"./Button-CYmxxZwT.js";import"./small-cross-CnxqgFjC.js";import"./ActionButton-D60qZq-8.js";import"./Checkbox-BMFNhNk5.js";import"./useValueChanged-DkO6q2A4.js";import"./CollapsiblePanel-CpPszFea.js";import"./MultiColumnSortDialog-BO-EQQbS.js";import"./MenuTrigger-B_xBsrpb.js";import"./CompositeItem-domKBhoO.js";import"./ToolbarRootContext-DhyEOAqU.js";import"./getDisabledMountTransitionStyles-Due7wGO5.js";import"./getPseudoElementBounds-COzzTRAU.js";import"./chevron-down-BhnESDG4.js";import"./index-BJs7nm0G.js";import"./error-rq6qiBRx.js";import"./BaseCbacBanner-rOVSJyTs.js";import"./makeExternalStore-BUw-VQ9F.js";import"./Tooltip-DtxlDfYK.js";import"./isObject-DKRs3Wgv.js";import"./debounce-DGT6__t6.js";import"./useOsdkClient-DX1BaHYe.js";import"./tick-_PKXPN2p.js";import"./DropdownField-ClRlB2T0.js";import"./isEqual-C5OEvHwJ.js";import"./_baseIsEqual-dQE-vf0U.js";import"./withOsdkMetrics-bastq8vC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
