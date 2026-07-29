import{j as i}from"./iframe-Bb3tjC3V.js";import{O as p}from"./object-table-CJS97cBl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DVjNCRLw.js";import"./preload-helper-CYmQZjB9.js";import"./Table-CSQg68Ow.js";import"./index-BPbQvyfn.js";import"./Dialog-JuKH8eUw.js";import"./cross-CHnMcV43.js";import"./svgIconContainer-Y0lQigj_.js";import"./useBaseUiId-D29cBnlE.js";import"./InternalBackdrop-BUjERfDm.js";import"./composite-C3Rlyybz.js";import"./index-B05qlECy.js";import"./index-BZq7S8i7.js";import"./index-CBbmq_RV.js";import"./useEventCallback-BhnPPuQI.js";import"./SkeletonBar-DLek027G.js";import"./LoadingCell-ZyoIUTH5.js";import"./ColumnConfigDialog-Dv5at7Or.js";import"./DraggableList-BRya9Y_J.js";import"./search-BU45UnDR.js";import"./Input-CpaS_vj-.js";import"./useControlled-CvjI6YFT.js";import"./isEqual-BYbIO0uS.js";import"./isObject-B2IdTXHz.js";import"./Button-nm2pYev7.js";import"./ActionButton-CskzZh5T.js";import"./Checkbox-Dfh8P7YA.js";import"./useValueChanged-CBoYu7DV.js";import"./CollapsiblePanel-IrvBouZy.js";import"./MultiColumnSortDialog-CIoKkXcc.js";import"./MenuTrigger-EHfkiS7C.js";import"./CompositeItem-DvrPK8M7.js";import"./ToolbarRootContext-CDj27CZR.js";import"./getDisabledMountTransitionStyles-CP1Ghi6w.js";import"./getPseudoElementBounds-CjInRXP7.js";import"./chevron-down-DFJ_DLyR.js";import"./index-2qiAvfo5.js";import"./error-Bc8MML6_.js";import"./BaseCbacBanner-BDf2Hlk6.js";import"./makeExternalStore-wfcM5ZfN.js";import"./Tooltip-BanDnfXI.js";import"./PopoverPopup-BZFW-8FX.js";import"./toNumber-vaQeWmta.js";import"./useOsdkClient-nw5v--UU.js";import"./tick-iU3CP0gB.js";import"./DropdownField-AJyY6Cnq.js";import"./withOsdkMetrics-gOeagBA8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
