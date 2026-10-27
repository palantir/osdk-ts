import{j as i}from"./iframe-BECIlG-5.js";import{O as p}from"./object-table-Cn80KhAU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DY4pjlAM.js";import"./preload-helper-Cv0NrjSm.js";import"./Table-DCEgNBAH.js";import"./index-0SVtXK84.js";import"./Dialog-tJiLD3AL.js";import"./cross-ubVpY3r4.js";import"./svgIconContainer-B-mztRGa.js";import"./useBaseUiId-BynaZof5.js";import"./InternalBackdrop-BZhDjVB7.js";import"./composite-Bb9FNHOi.js";import"./index-CXVpCKKQ.js";import"./index-sIW5LEP1.js";import"./index-smJV3T31.js";import"./useEventCallback-BfSwElrQ.js";import"./SkeletonBar-iQAgIX6_.js";import"./LoadingCell-N0o8dApa.js";import"./ColumnConfigDialog-Y-qZNvwI.js";import"./DraggableList-Cpu3iQ2P.js";import"./search-CxKdELes.js";import"./Input-Bv6R3iZB.js";import"./useControlled-DwAysQOe.js";import"./Button-cPt_jdAf.js";import"./small-cross-DOrp5uSW.js";import"./ActionButton-BElBMuAb.js";import"./Checkbox-C54U06wB.js";import"./useValueChanged-DzzM5aJt.js";import"./CollapsiblePanel-eLA5oT-Y.js";import"./MultiColumnSortDialog-DPkNj1JI.js";import"./MenuTrigger-Cie77Q8I.js";import"./CompositeItem-Dl8QDSWw.js";import"./ToolbarRootContext-4ge2fwUs.js";import"./getDisabledMountTransitionStyles-BHt47q_U.js";import"./getPseudoElementBounds-CXr87JiK.js";import"./chevron-down-B_ghTOEG.js";import"./index-BtesBorZ.js";import"./error-W3FJWM_l.js";import"./BaseCbacBanner-LAOQ_TmD.js";import"./makeExternalStore-c840Nimt.js";import"./Tooltip-RYGXYlOF.js";import"./PopoverPopup-C9IPhO-b.js";import"./debounce-CE7uEcJP.js";import"./useOsdkClient-D-IWW227.js";import"./tick-lltI7QIF.js";import"./DropdownField-BFCCzcrd.js";import"./isEqual-Dzk0LpTo.js";import"./withOsdkMetrics-DjCRSE02.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
