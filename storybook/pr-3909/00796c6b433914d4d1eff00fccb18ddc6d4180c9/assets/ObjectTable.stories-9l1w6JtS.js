import{j as i}from"./iframe-DzLmQzfL.js";import{O as p}from"./object-table-BEYWSqeH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-eMa7EJSz.js";import"./preload-helper-DYuv-bf-.js";import"./Table-BENlvreU.js";import"./index-CdQpjacm.js";import"./Dialog-BiDgKXsL.js";import"./cross-DfDMn0pr.js";import"./svgIconContainer-Jv28MIw9.js";import"./useBaseUiId-Bmp5LN4j.js";import"./InternalBackdrop-pKagafuB.js";import"./composite-Cez-p8GT.js";import"./index-D0Om1NOm.js";import"./index-ByLiAsET.js";import"./index-fUD05Gsl.js";import"./useEventCallback-B8lpys4D.js";import"./SkeletonBar-Bs8J-8ST.js";import"./LoadingCell-BNNKrPRM.js";import"./ColumnConfigDialog-KwDlSvr0.js";import"./DraggableList-BINn4pAx.js";import"./search-tY_g51mG.js";import"./Input-ea8HxTa0.js";import"./useControlled-AhpadjFe.js";import"./Button-DyUjkQv3.js";import"./small-cross-CfZYje-b.js";import"./ActionButton-CC-w0u8p.js";import"./Checkbox-CuTCRk_I.js";import"./useValueChanged-DS7g6QS1.js";import"./CollapsiblePanel-UEe2R4Qd.js";import"./MultiColumnSortDialog-Cp37JhTS.js";import"./MenuTrigger-eQ7_Xffg.js";import"./CompositeItem-BgbTo1rM.js";import"./ToolbarRootContext-BM7iC6VN.js";import"./getDisabledMountTransitionStyles-brOSu3I-.js";import"./getPseudoElementBounds-DqBxNzDr.js";import"./chevron-down-B52Hmy6V.js";import"./index-CdaZRfws.js";import"./error-BFLeOIbO.js";import"./BaseCbacBanner-DN_VBjDp.js";import"./makeExternalStore-Bw6HJp50.js";import"./Tooltip-CbYJzNWg.js";import"./PopoverPopup-B3ZeXY53.js";import"./debounce-CfJ7O41a.js";import"./useOsdkClient-DbRHoimk.js";import"./tick-qaJHrmvM.js";import"./DropdownField-CzUzhl01.js";import"./isEqual-1nX8sYVi.js";import"./withOsdkMetrics-lxs0PU1I.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
