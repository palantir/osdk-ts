import{j as i}from"./iframe-BnQn1FlY.js";import{O as p}from"./object-table-BOdB6mRf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BjXpem2K.js";import"./preload-helper-BecbOaxr.js";import"./Table-DvIt_vn4.js";import"./index-CfSflYMd.js";import"./Dialog-BUoqfpGV.js";import"./cross-CQwrttsU.js";import"./svgIconContainer-C8CWCK4h.js";import"./useBaseUiId-D_n7SQSX.js";import"./InternalBackdrop-BK5BvcOi.js";import"./composite-D7QBQd-n.js";import"./index-TO_0y0N3.js";import"./index-C1lVCR7D.js";import"./index-BZF3QGqV.js";import"./useEventCallback-CFxdcXkp.js";import"./SkeletonBar-DABOfyFg.js";import"./LoadingCell-DIqxv0Br.js";import"./ColumnConfigDialog-BUyCrvE-.js";import"./DraggableList-C5z8YS9x.js";import"./search-DRs0Pqxh.js";import"./Input-DoQKk1PO.js";import"./useControlled-i3XBhDi5.js";import"./Button-DdWl47ZG.js";import"./small-cross-CIlPARtt.js";import"./ActionButton-D4YbdFWJ.js";import"./Checkbox-DMoofL04.js";import"./useValueChanged-DCL6nLeD.js";import"./CollapsiblePanel-7pS-YmLY.js";import"./MultiColumnSortDialog-BnrzMhSB.js";import"./MenuTrigger-4Ysk7jLT.js";import"./CompositeItem-DQ-KZaEd.js";import"./ToolbarRootContext-DpVEn9hT.js";import"./getDisabledMountTransitionStyles-mUbg0fsY.js";import"./getPseudoElementBounds-Btt2eHQG.js";import"./chevron-down-CBuocP3-.js";import"./index-CzWHx20P.js";import"./error-HPj_xS2_.js";import"./BaseCbacBanner-CMFVvGvU.js";import"./makeExternalStore-CydlKeaD.js";import"./Tooltip-CZ3Eb1De.js";import"./PopoverPopup-Dv1gHfMh.js";import"./debounce-C4XOemAw.js";import"./useOsdkClient-BOzHXDv_.js";import"./tick-ByOfPxOM.js";import"./DropdownField-CBQ5hYY4.js";import"./isEqual-zAekXAR7.js";import"./withOsdkMetrics-BE7G7j9y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
