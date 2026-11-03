import{j as i}from"./iframe-D4r_-dEc.js";import{O as p}from"./object-table-A7euv14f.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B8NU2YA6.js";import"./preload-helper-6ZtcGGS6.js";import"./Table-XWns758I.js";import"./index-7caLYRtX.js";import"./Dialog-Dc1LT3hO.js";import"./cross-D7UvadIv.js";import"./svgIconContainer-Dh_c1Bbk.js";import"./useBaseUiId-Di53fTVw.js";import"./InternalBackdrop-CZm9G_S4.js";import"./composite-DCTx9hyK.js";import"./index-QrOM1WuB.js";import"./index-BMA4s8ZI.js";import"./index-CoFQrcih.js";import"./useEventCallback-DqALnZfq.js";import"./SkeletonBar-CvzkLxwM.js";import"./LoadingCell-CSLcXk57.js";import"./ColumnConfigDialog-B8OLPnjr.js";import"./DraggableList-BDTeK6ae.js";import"./search-DXq3JDJP.js";import"./Input-B2HDaQON.js";import"./useControlled-BmrimB4V.js";import"./Button-Bk2BCIeA.js";import"./small-cross-BkHUlaQn.js";import"./ActionButton-DP6StPqT.js";import"./Checkbox-CPRtZsV2.js";import"./useValueChanged-C-kvsFRL.js";import"./CollapsiblePanel-yRKwIWIq.js";import"./MultiColumnSortDialog-F4ahE3SX.js";import"./MenuTrigger-BlAB2oa9.js";import"./CompositeItem-Dyw9HZNd.js";import"./ToolbarRootContext-nt_JLtrz.js";import"./getDisabledMountTransitionStyles-BiBMpt_n.js";import"./getPseudoElementBounds-CEVXpGUD.js";import"./chevron-down-ToRQzCeL.js";import"./index-_HJbTBBE.js";import"./error-1vTQ2DTJ.js";import"./BaseCbacBanner-Cxz-7EBN.js";import"./makeExternalStore-6c6hwxKy.js";import"./Tooltip-C_exduk2.js";import"./PopoverPopup-fn5YEEDm.js";import"./debounce-DwQf9jej.js";import"./useOsdkClient-bldReknQ.js";import"./tick-D-AaSPeq.js";import"./DropdownField-H8Z-0aRQ.js";import"./isEqual-Ct3XBS6E.js";import"./withOsdkMetrics-CYIlN546.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
