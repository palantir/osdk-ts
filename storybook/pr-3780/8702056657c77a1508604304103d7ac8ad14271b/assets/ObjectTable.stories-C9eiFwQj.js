import{j as i}from"./iframe-DqIzSpCg.js";import{O as p}from"./object-table-Do_2Ejyo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dei15H71.js";import"./preload-helper-R5GmqVN8.js";import"./Table-D6CCjywu.js";import"./index-BrnybYQf.js";import"./Dialog-DDIOlKE9.js";import"./cross-Dc0LE15P.js";import"./svgIconContainer-Ob4Yg7Br.js";import"./useBaseUiId-Cqtekamh.js";import"./InternalBackdrop-DF9hbMsT.js";import"./composite-Df5qJXaR.js";import"./index-CH70aXwo.js";import"./index-DGMFLn0J.js";import"./index-CCNyIM8K.js";import"./useEventCallback-DYWUko3K.js";import"./SkeletonBar-CyTTvGgo.js";import"./LoadingCell-C9XMvKrd.js";import"./ColumnConfigDialog-DCxhbfI-.js";import"./DraggableList-Bcc5zRpi.js";import"./search-DOaKOXdE.js";import"./Input-C954CXtm.js";import"./useControlled-C3eA8reA.js";import"./isEqual-DVg8JjXK.js";import"./isObject-CBRil1Wa.js";import"./Button-BKX_91Hc.js";import"./ActionButton-CCx9U4EV.js";import"./Checkbox-Dbh2lHby.js";import"./useValueChanged-7uyeyXMu.js";import"./CollapsiblePanel-Dg4ZPYnE.js";import"./MultiColumnSortDialog-1DAoLiFO.js";import"./MenuTrigger-BeMiuhCy.js";import"./CompositeItem-DnElVRNo.js";import"./ToolbarRootContext-yHYhRp3F.js";import"./getDisabledMountTransitionStyles-DjlKcSP0.js";import"./getPseudoElementBounds-BBHU_0Vc.js";import"./chevron-down-CAfWuvJU.js";import"./index-DXjCR0SH.js";import"./error-DqiHWIhs.js";import"./BaseCbacBanner-DUUuC9t3.js";import"./makeExternalStore-C1J_4LFW.js";import"./Tooltip-OEq8UMF_.js";import"./PopoverPopup-XqcHPyvv.js";import"./toNumber-BDgQ8gPM.js";import"./useOsdkClient-Mj2L1f2j.js";import"./tick-BbdGReRZ.js";import"./DropdownField-DCl53iKj.js";import"./withOsdkMetrics-toCmYVYF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
