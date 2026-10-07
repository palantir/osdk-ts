import{j as i}from"./iframe-B4KZUNWb.js";import{O as p}from"./object-table-Ci1c3UDh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bs7RmN6J.js";import"./preload-helper-ui8H5KaA.js";import"./Table-BCRy3iCw.js";import"./index-DESZZjJb.js";import"./Dialog-Do7D9TXp.js";import"./cross-D6lNZtEd.js";import"./svgIconContainer-CPLrBI81.js";import"./useBaseUiId-DqBZmwDf.js";import"./InternalBackdrop-Du74jqkg.js";import"./composite-kqMgXMmz.js";import"./index-CRzCVguq.js";import"./index-BuRp3NOn.js";import"./index-U4wKfCVv.js";import"./useEventCallback-B7s_WPhy.js";import"./SkeletonBar-CGSSVG4t.js";import"./LoadingCell-BGpZ6WD3.js";import"./ColumnConfigDialog-g8vO-KBG.js";import"./DraggableList-CbycsscA.js";import"./search-B4kRZAFp.js";import"./Input-d873acvu.js";import"./useControlled-DUnmiOhJ.js";import"./Button-B0sQZAH6.js";import"./small-cross-3FFS-2BP.js";import"./ActionButton-jQd9zIQY.js";import"./Checkbox-fRoN73K4.js";import"./useValueChanged-w3RyUsx0.js";import"./CollapsiblePanel-B6Kb1g9F.js";import"./MultiColumnSortDialog-BZ_x3Bcp.js";import"./MenuTrigger-BN7uWxTJ.js";import"./CompositeItem-BeLkJ8RK.js";import"./ToolbarRootContext-DvKJDRkf.js";import"./getDisabledMountTransitionStyles-q8cXRota.js";import"./getPseudoElementBounds-D5Mn0K7G.js";import"./chevron-down-BqCbkmmJ.js";import"./index-B8MTfnNm.js";import"./error-D-IekXva.js";import"./BaseCbacBanner-BL-xmbdR.js";import"./makeExternalStore-FuGpKWwp.js";import"./Tooltip-Dlw9XQHv.js";import"./PopoverPopup-Cqe_G0pW.js";import"./debounce-DtJpUOtB.js";import"./useOsdkClient-DKvjyiDA.js";import"./tick-Y60tUWqi.js";import"./DropdownField-DqTCpZZ-.js";import"./isEqual-B3i1pzS0.js";import"./withOsdkMetrics-DZhR0TNz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
