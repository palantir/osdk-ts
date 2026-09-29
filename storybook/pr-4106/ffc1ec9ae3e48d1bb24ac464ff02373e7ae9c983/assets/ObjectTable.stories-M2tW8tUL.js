import{j as i}from"./iframe-DwbDsShL.js";import{O as p}from"./object-table-BgT5oNfq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-lqPVM1nm.js";import"./preload-helper-DhhmyXUk.js";import"./Table-BTdMExPd.js";import"./index-BELzmUVs.js";import"./Dialog-C9RL-4tq.js";import"./cross-CsyWmC2B.js";import"./svgIconContainer-xLBfLuAm.js";import"./useBaseUiId-CKINu-S2.js";import"./InternalBackdrop-CkMaO7_K.js";import"./composite-Dplovskw.js";import"./index-DYqy7FgF.js";import"./index-DL-SFPZn.js";import"./index-TAMkn_jr.js";import"./useEventCallback-D_o7AQG5.js";import"./SkeletonBar-hzcPKCTf.js";import"./LoadingCell-CKk4OZeM.js";import"./ColumnConfigDialog-eKI2SZFP.js";import"./DraggableList-sYZIUWkC.js";import"./search-D1hGu4NI.js";import"./Input-CMFW6oif.js";import"./useControlled-DY8ufjhO.js";import"./Button-DphpaBib.js";import"./small-cross--zSCPQCk.js";import"./ActionButton-CcahO6-X.js";import"./Checkbox-B3ZXGLZe.js";import"./useValueChanged-BgzkqT_-.js";import"./CollapsiblePanel-BDW-Fe21.js";import"./MultiColumnSortDialog-DHXQa_DH.js";import"./MenuTrigger-CR3U5NVZ.js";import"./CompositeItem-DOXgLazM.js";import"./ToolbarRootContext-BPuHUJNX.js";import"./getDisabledMountTransitionStyles-BugVbO8p.js";import"./getPseudoElementBounds-FBgTSxcr.js";import"./chevron-down-ckW8ziB1.js";import"./index-DZ-Ao651.js";import"./error-BJfNfAJx.js";import"./BaseCbacBanner-DQ4Mqy-u.js";import"./makeExternalStore-y7bd8937.js";import"./Tooltip-zs9usS6P.js";import"./PopoverPopup-BUbu0rVo.js";import"./debounce-DIDHBmIq.js";import"./useOsdkClient-DayV63R7.js";import"./tick-cgtgvDhU.js";import"./DropdownField-k94eZHLI.js";import"./isEqual-D9cIyJJ2.js";import"./withOsdkMetrics-BqWyBjIv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
