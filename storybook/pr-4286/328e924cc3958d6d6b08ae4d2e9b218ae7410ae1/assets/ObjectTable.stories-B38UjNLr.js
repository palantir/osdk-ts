import{j as i}from"./iframe-_lLrSj1r.js";import{O as p}from"./object-table-DfjFdMz3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bm4xwaKf.js";import"./preload-helper--K06I6bX.js";import"./Table-C6Rb4d0k.js";import"./index-u4LjU3wy.js";import"./Dialog-BM1TicUi.js";import"./cross-Cf8HUSkr.js";import"./svgIconContainer-mBZD1oTc.js";import"./useBaseUiId-Bc8GG6V8.js";import"./InternalBackdrop-Lf90Fmle.js";import"./composite-BZPxrUSk.js";import"./index-DMVKgr18.js";import"./index-_W33FQQz.js";import"./index-BbJyxAJY.js";import"./useEventCallback-r8S4G08J.js";import"./SkeletonBar-4yDHQYXq.js";import"./LoadingCell-C39J4KHi.js";import"./ColumnConfigDialog-CxI_NE7F.js";import"./DraggableList-Ba07DvjG.js";import"./search-BsFDT1OC.js";import"./Input-ByElj6b4.js";import"./useControlled-ef7rEDgw.js";import"./Button-DtR0BNuF.js";import"./small-cross-MPNxrGPx.js";import"./ActionButton-DkdffwG3.js";import"./Checkbox-Dfkp-Kkb.js";import"./useValueChanged-B2NcodEa.js";import"./CollapsiblePanel-DSAb5O_U.js";import"./MultiColumnSortDialog-BEgba4jz.js";import"./MenuTrigger-cjXmFjSP.js";import"./CompositeItem-DQchaMiL.js";import"./ToolbarRootContext-DHD80eI9.js";import"./getDisabledMountTransitionStyles-5zflYeEg.js";import"./getPseudoElementBounds-_MMb03QT.js";import"./chevron-down-DeOYs4U6.js";import"./index-Cp32Ucpe.js";import"./error-po7axJSl.js";import"./BaseCbacBanner-BwEI1yUe.js";import"./makeExternalStore-CBJvRSBt.js";import"./Tooltip-D9sqgv57.js";import"./PopoverPopup-DmehJnCH.js";import"./debounce-CT5Ar2jy.js";import"./useOsdkClient-BGeTWEem.js";import"./tick-BhMF4eWB.js";import"./DropdownField-D01ccTug.js";import"./isEqual-DfmCLQw6.js";import"./withOsdkMetrics-cH-rirPE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
