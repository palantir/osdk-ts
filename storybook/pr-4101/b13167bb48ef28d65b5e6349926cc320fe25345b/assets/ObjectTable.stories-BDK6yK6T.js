import{j as i}from"./iframe-BqJ-ZnBR.js";import{O as p}from"./object-table-CmgAeKsC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B5-JiS6z.js";import"./preload-helper-JLrGau54.js";import"./Table-DkGWmtzq.js";import"./index-BK1P1voH.js";import"./Dialog-DI5SN71k.js";import"./cross-BDK7LG_e.js";import"./svgIconContainer-Dc4tWYI9.js";import"./useBaseUiId-BcNmiaah.js";import"./InternalBackdrop-BQv9yU4o.js";import"./composite-iKsnpVuz.js";import"./index-94n_hVW-.js";import"./index-By0VHStz.js";import"./index-BLIg07yZ.js";import"./useEventCallback-HXpemZPp.js";import"./SkeletonBar-BeQPr1Hf.js";import"./LoadingCell-DYGG6ST4.js";import"./ColumnConfigDialog-CeQ_Sw7r.js";import"./DraggableList-B50CmaiN.js";import"./search-BZek_B3M.js";import"./Input-Bgztm7qK.js";import"./useControlled-DrJztn-2.js";import"./Button-DxthHQUU.js";import"./small-cross-CeRG__Xs.js";import"./ActionButton-BRh8fnVZ.js";import"./Checkbox-D2gnaM-s.js";import"./useValueChanged-B9GECoed.js";import"./CollapsiblePanel-rA8Z4Ruz.js";import"./MultiColumnSortDialog-R23BzF34.js";import"./MenuTrigger-BG5uKeX8.js";import"./CompositeItem-COP7jkJm.js";import"./ToolbarRootContext-nuNuNDyh.js";import"./getDisabledMountTransitionStyles-BjNITUuJ.js";import"./getPseudoElementBounds-SdYgej76.js";import"./chevron-down-rJ0TahbK.js";import"./index-Dku47buH.js";import"./error-B0ep7kDm.js";import"./BaseCbacBanner-BGoHf3Yc.js";import"./makeExternalStore-DtB887rj.js";import"./Tooltip-ChG6KFaQ.js";import"./PopoverPopup-DklAn_WH.js";import"./debounce-DUBEN3SV.js";import"./useOsdkClient-CIGN3ZFv.js";import"./tick-CvXUKs1d.js";import"./DropdownField-CLjpg3Un.js";import"./isEqual-CbTBsGdo.js";import"./withOsdkMetrics-CsoY-VD3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
