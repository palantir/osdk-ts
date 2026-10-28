import{j as i}from"./iframe-Cbj36Vfl.js";import{O as p}from"./object-table-Ck_Gk-KX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D7oJn_QO.js";import"./preload-helper-D9vtqHHo.js";import"./Table-CSAIsRfe.js";import"./index-CsY1LewD.js";import"./Dialog-B6LavUp4.js";import"./cross-BMM6M_v0.js";import"./svgIconContainer-hIUzSHkO.js";import"./useBaseUiId-Dm0BFRC6.js";import"./InternalBackdrop-BqigWIDb.js";import"./composite-BNLz_aLE.js";import"./index-BCwTQa_2.js";import"./index-C4i1VFtD.js";import"./index-D7hW5oga.js";import"./useEventCallback-Dlret5nm.js";import"./SkeletonBar-SALMo7gf.js";import"./LoadingCell-xwoMoQxj.js";import"./ColumnConfigDialog-Br62xFzv.js";import"./DraggableList-hYn9rXPD.js";import"./search-B0cFd55B.js";import"./Input-bczR2KJT.js";import"./useControlled-BLkU7nYF.js";import"./Button-BvKlSQww.js";import"./small-cross-CPlaBkT_.js";import"./ActionButton-C-4-1sk9.js";import"./Checkbox-KclU3XSR.js";import"./useValueChanged-Be0rmsr7.js";import"./CollapsiblePanel-DTg3GoH2.js";import"./MultiColumnSortDialog-DDicJckq.js";import"./MenuTrigger-DtrhwXCR.js";import"./CompositeItem-DyJlzvO6.js";import"./ToolbarRootContext-B2HRt-p3.js";import"./getDisabledMountTransitionStyles-DVNBPl0-.js";import"./getPseudoElementBounds-BzB85nEj.js";import"./chevron-down-b6fjz5-P.js";import"./index-DGMJzfmR.js";import"./error-B5SQU-7B.js";import"./BaseCbacBanner-i0Mk5qM4.js";import"./makeExternalStore-BQvhAloH.js";import"./Tooltip-DFxnzQIr.js";import"./PopoverPopup-DVJleO51.js";import"./debounce-C-I-lp5G.js";import"./useOsdkClient-Z_Xvqm2q.js";import"./tick-DrdzLXJS.js";import"./DropdownField-Bd5p68Fh.js";import"./isEqual-B4e635j3.js";import"./withOsdkMetrics-CvORwH-d.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
