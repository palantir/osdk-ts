import{j as i}from"./iframe-BFVvXCDn.js";import{O as p}from"./object-table-D3-elgUM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ed5iTM86.js";import"./preload-helper-50_WzFUV.js";import"./Table-CrnkCGgg.js";import"./index-QM5k4kGb.js";import"./Dialog-ChCe0ln8.js";import"./cross-BFaVqKHr.js";import"./svgIconContainer-BV-Z1JXi.js";import"./useBaseUiId-B694u7eA.js";import"./InternalBackdrop-DBCVqNCu.js";import"./composite-CzVxjBsa.js";import"./index-iRevsRnR.js";import"./index-BOeHgaJB.js";import"./index-CqQv2dpe.js";import"./useEventCallback-mJtTvRIv.js";import"./SkeletonBar-Bmfk3osh.js";import"./LoadingCell-BCQcznuJ.js";import"./ColumnConfigDialog-B4G1AxcS.js";import"./DraggableList-DsdqaVxR.js";import"./search-CW9s8WSc.js";import"./Input-Dtig63-B.js";import"./useControlled-DyhWa7C1.js";import"./Button-Dcbnl--f.js";import"./small-cross-BxlAPzIk.js";import"./ActionButton-1gMKJ2dZ.js";import"./Checkbox-BtI0IIOe.js";import"./useValueChanged-BGrg1pf-.js";import"./CollapsiblePanel-5KoLIkeE.js";import"./MultiColumnSortDialog-C7gZDRiC.js";import"./MenuTrigger-P7WZCQyo.js";import"./CompositeItem-f5g69QxK.js";import"./ToolbarRootContext-CrlmdYIj.js";import"./getDisabledMountTransitionStyles-BOSuCcSN.js";import"./getPseudoElementBounds-D-HLiNmi.js";import"./chevron-down-BOFD2Flq.js";import"./index-BMCmLaDr.js";import"./error-DOU--p1t.js";import"./BaseCbacBanner-DO3fHETM.js";import"./makeExternalStore-BWSWF8JC.js";import"./Tooltip-CALPreUU.js";import"./isObject-C2c9eo6X.js";import"./debounce-DWkSOkQq.js";import"./useOsdkClient-Cl7GKeeY.js";import"./tick-CoqVexrK.js";import"./DropdownField-DspSlDyP.js";import"./isEqual-B-ghy4pr.js";import"./_baseIsEqual-Cw0xf_Tt.js";import"./withOsdkMetrics-NltFnboY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
