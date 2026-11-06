import{j as i}from"./iframe-CEcdsVJq.js";import{O as p}from"./object-table-kly_C4hy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CB7mSSsB.js";import"./preload-helper-CwdDwPFb.js";import"./Table-BuBnqDbM.js";import"./index-CYAMjkkg.js";import"./Dialog-BcKkBsF0.js";import"./cross-MZ6bg35c.js";import"./svgIconContainer-CM3Ra624.js";import"./useBaseUiId-DGCtOfjA.js";import"./InternalBackdrop-CrdF0gp5.js";import"./composite-Bw-yzexU.js";import"./index-ByC2L83v.js";import"./index-Dt5JenlP.js";import"./index-BqhjR31D.js";import"./useEventCallback-CoOaDXAk.js";import"./SkeletonBar-B0hbq4FE.js";import"./LoadingCell-DelqVOB6.js";import"./ColumnConfigDialog-Dl-d7U0a.js";import"./DraggableList-B5vt0VaS.js";import"./search-DyPNv9j0.js";import"./Input-tSgTwGI-.js";import"./useControlled-oPldRElz.js";import"./Button-DE6hvZhq.js";import"./small-cross-BAIe5upx.js";import"./ActionButton-O2R9i3U9.js";import"./Checkbox-CQCkwFw-.js";import"./useValueChanged-HH9MPtoe.js";import"./CollapsiblePanel-CfmGyi20.js";import"./MultiColumnSortDialog-CB7cRcpw.js";import"./MenuTrigger-DIyqzTda.js";import"./CompositeItem-DPYzCgzB.js";import"./ToolbarRootContext-CHwqmaMQ.js";import"./getDisabledMountTransitionStyles-CU0LRjik.js";import"./getPseudoElementBounds-CdIwqNAh.js";import"./chevron-down-C-qVIMYg.js";import"./index-BWNvfyzP.js";import"./error-B4aXreAp.js";import"./BaseCbacBanner-CFSt_HvR.js";import"./makeExternalStore-BPRH1LKG.js";import"./Tooltip-bo6C_98m.js";import"./PopoverPopup-DUz2sdVN.js";import"./debounce-CoMjtpmw.js";import"./useOsdkClient-BdsS4ftD.js";import"./tick-CP_0B18b.js";import"./DropdownField-ZmhVFUXY.js";import"./isEqual-BMJgaJ9U.js";import"./withOsdkMetrics-Mp4Rwj5-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
