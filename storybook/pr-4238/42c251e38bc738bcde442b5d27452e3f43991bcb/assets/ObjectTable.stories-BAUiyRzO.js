import{j as i}from"./iframe-D2f1Nzwk.js";import{O as p}from"./object-table-CIIsCPIu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-cqeeFijg.js";import"./preload-helper-oV1Eeolq.js";import"./Table-DPxHFvSR.js";import"./index-DLHsiDYZ.js";import"./Dialog-uAL31SBn.js";import"./cross-DkwiluwT.js";import"./svgIconContainer-CmuFo95M.js";import"./useBaseUiId-C1fFwhw7.js";import"./InternalBackdrop-lpGOYkEJ.js";import"./composite-CiG9-8W_.js";import"./index-QYMyWYDY.js";import"./index-BojiIOfH.js";import"./index-BmDZuti5.js";import"./useEventCallback-tMcy_YiL.js";import"./SkeletonBar-nGMBXhyP.js";import"./LoadingCell-8BQAcXDu.js";import"./ColumnConfigDialog-BW_W77MG.js";import"./DraggableList-B3svYvPz.js";import"./search-Cf99U-Bj.js";import"./Input-DGocKpsh.js";import"./useControlled-CNjTn84h.js";import"./Button-D6z8871L.js";import"./small-cross-BPAsCQGt.js";import"./ActionButton-B_L3rwG4.js";import"./Checkbox-B3Qq5NtY.js";import"./useValueChanged-CUcJG0Bt.js";import"./CollapsiblePanel-BwmdKoWP.js";import"./MultiColumnSortDialog-B_NtWYuQ.js";import"./MenuTrigger-BC-gZs2H.js";import"./CompositeItem-C741riYb.js";import"./ToolbarRootContext-Dx7XJj5N.js";import"./getDisabledMountTransitionStyles-BNKxtgYL.js";import"./getPseudoElementBounds-kPdI6WhS.js";import"./chevron-down-DJdsQouz.js";import"./index-D02xz1tz.js";import"./error-BeTADbMo.js";import"./BaseCbacBanner-DrIYCssB.js";import"./makeExternalStore-DTw3LndD.js";import"./Tooltip-CDYk2b3D.js";import"./PopoverPopup-CsHrtQTv.js";import"./debounce-C9b86hHB.js";import"./useOsdkClient-DHeuZpzO.js";import"./tick-Bl3uL3bd.js";import"./DropdownField-D65WFOp_.js";import"./isEqual-CnaQZLDl.js";import"./withOsdkMetrics-BCs1456K.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
