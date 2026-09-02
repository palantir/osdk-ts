import{j as i}from"./iframe-DZOL1fAY.js";import{O as p}from"./object-table-SSJOUKzl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D7cC_nsH.js";import"./preload-helper-3H1iqF3g.js";import"./Table-B62G5e17.js";import"./index-Dn4isnDY.js";import"./Dialog-cPcGwNln.js";import"./cross-86m0rjnN.js";import"./svgIconContainer-B6vD6Ghc.js";import"./useBaseUiId-Cvxi0iS7.js";import"./InternalBackdrop-DYc2T3en.js";import"./composite-T0X3QkXF.js";import"./index-C11ji0i2.js";import"./index-DZ_Yay9Y.js";import"./index-DFd2jDKC.js";import"./useEventCallback-ItCAOyRH.js";import"./SkeletonBar-LYReqkUo.js";import"./LoadingCell-D05YBGhE.js";import"./ColumnConfigDialog-BKBMAzyi.js";import"./DraggableList-Dhhz3Grx.js";import"./search-B2NPYcqq.js";import"./Input-VXijC7GT.js";import"./useControlled-DRhy3GQv.js";import"./Button-DsiRqDn-.js";import"./small-cross-BoSvEJri.js";import"./ActionButton-BsaHD9YU.js";import"./Checkbox-D9uKkogi.js";import"./useValueChanged-DcZiCWMF.js";import"./CollapsiblePanel-fLJD7V0z.js";import"./MultiColumnSortDialog-BWc9Kkx2.js";import"./MenuTrigger-CsR5DxY2.js";import"./CompositeItem-BqTSWS-d.js";import"./ToolbarRootContext-BSvTmWDd.js";import"./getDisabledMountTransitionStyles-BhFC88vd.js";import"./getPseudoElementBounds-Ba8N0Q3i.js";import"./chevron-down-BzBCSFbA.js";import"./index-COxjItVW.js";import"./error-DjEgQQ85.js";import"./BaseCbacBanner-CRUr-lWy.js";import"./makeExternalStore-BS_yphcb.js";import"./Tooltip-DHwsWy8-.js";import"./PopoverPopup-ZYkmOrRT.js";import"./debounce-DZH3gqyd.js";import"./useOsdkClient-eW2Kmz8P.js";import"./tick-D-SuASFY.js";import"./DropdownField-Sc-mwTM2.js";import"./isEqual-DNKlfwvT.js";import"./withOsdkMetrics-2IcQnEf1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
