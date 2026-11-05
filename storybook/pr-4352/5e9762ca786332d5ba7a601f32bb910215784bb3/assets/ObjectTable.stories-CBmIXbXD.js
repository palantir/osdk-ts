import{j as i}from"./iframe-B7iXMeep.js";import{O as p}from"./object-table-B9UZXCXn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-u3FCBkL8.js";import"./preload-helper-BZFSoYNL.js";import"./Table-Pt4boUVr.js";import"./index-B9IPxHLp.js";import"./Dialog-BKfzE-yo.js";import"./cross-DxJs6dla.js";import"./svgIconContainer-6zXBkUlH.js";import"./useBaseUiId-D1eq_nvb.js";import"./InternalBackdrop-dELTuav9.js";import"./composite-vYr7iKxA.js";import"./index-DO_Xy6GM.js";import"./index-BCuE63Ls.js";import"./index-C7X42qv-.js";import"./useEventCallback-lGcIidgf.js";import"./SkeletonBar-DM6oPXtG.js";import"./LoadingCell-BO8IZx3f.js";import"./ColumnConfigDialog-Syoe0F7T.js";import"./DraggableList-dU0OXsyp.js";import"./search-CC1z-TYa.js";import"./Input-CXcN1OqN.js";import"./useControlled-BhUv2c2y.js";import"./Button-Cs7xUkhF.js";import"./small-cross-DuRTpqsB.js";import"./ActionButton-BT5QM3LR.js";import"./Checkbox-BMFNKKb2.js";import"./useValueChanged-Ca_viAtG.js";import"./CollapsiblePanel-meNR4Xwz.js";import"./MultiColumnSortDialog-D862tvOA.js";import"./MenuTrigger-HqcNVrC9.js";import"./CompositeItem-B2vumib4.js";import"./ToolbarRootContext-U7XGc6m3.js";import"./getDisabledMountTransitionStyles-CJVOz_Wf.js";import"./getPseudoElementBounds-3y1P965l.js";import"./chevron-down-S3M-k2gy.js";import"./index-igxynrzH.js";import"./error-BqkMjiz6.js";import"./BaseCbacBanner-DNqGS3n1.js";import"./makeExternalStore-myfZT6Ru.js";import"./Tooltip-SwHBo8I_.js";import"./isObject-C8naLxpN.js";import"./debounce-BhHOqNYV.js";import"./useOsdkClient-B0C9p8qN.js";import"./tick-Ddmq0CLi.js";import"./DropdownField-oRa3_E0o.js";import"./isEqual-BvYKqMbJ.js";import"./_baseIsEqual-D0ACkd8L.js";import"./withOsdkMetrics-Be4NSs13.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
