import{j as i}from"./iframe-B2ksOBZK.js";import{O as p}from"./object-table-DXi_UZ_4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bu_JB8c0.js";import"./preload-helper-DwVeKaeD.js";import"./Table-op2dMwT3.js";import"./index-C0qxAnyg.js";import"./Dialog-CrBw7OS3.js";import"./cross-DpwDHxX0.js";import"./svgIconContainer-BoLDP-in.js";import"./useBaseUiId-DBFPNCWo.js";import"./InternalBackdrop-Dzi45WTy.js";import"./composite-B-vnab_Z.js";import"./index-DyyxI-I6.js";import"./index-rll2Ydt2.js";import"./index-TB7zAsKF.js";import"./useEventCallback-CtJLJCiI.js";import"./SkeletonBar-CKJLp3uZ.js";import"./LoadingCell-BLeRCr8T.js";import"./ColumnConfigDialog-xgCk8V1O.js";import"./DraggableList-Br7k7oey.js";import"./search-BcOh8Jgz.js";import"./Input-DCyHQ82M.js";import"./useControlled-BKEjqMno.js";import"./Button-CWbg3cyR.js";import"./small-cross-Di5tDJTq.js";import"./ActionButton-D7Cv_dvM.js";import"./Checkbox-Dg6aqmsT.js";import"./useValueChanged-B3jNUwWr.js";import"./CollapsiblePanel-B4WKaPJO.js";import"./MultiColumnSortDialog-BEJMs8gv.js";import"./MenuTrigger-BLgXVcM0.js";import"./CompositeItem-BrQKGcIu.js";import"./ToolbarRootContext-BqtVZI5F.js";import"./getDisabledMountTransitionStyles-CQawNBlY.js";import"./getPseudoElementBounds-B8e6uiFl.js";import"./chevron-down-D80xuDhn.js";import"./index-D8M1fsCH.js";import"./error-BDJdlY4T.js";import"./BaseCbacBanner-DfBvktQ3.js";import"./makeExternalStore-7lDBXMAq.js";import"./Tooltip-D7V59zE7.js";import"./PopoverPopup-CefU-B1a.js";import"./debounce-DrXd2sNW.js";import"./useOsdkClient-BexeExeh.js";import"./tick-qqyLXFxc.js";import"./DropdownField-DLqjzm9N.js";import"./isEqual-CcFEOkDy.js";import"./withOsdkMetrics-Da6CzeGO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
