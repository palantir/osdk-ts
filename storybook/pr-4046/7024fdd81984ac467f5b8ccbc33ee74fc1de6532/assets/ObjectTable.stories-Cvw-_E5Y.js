import{j as i}from"./iframe-DaCuFEr4.js";import{O as p}from"./object-table-BLHNmO4Q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cr2kfcOI.js";import"./preload-helper-CH__3C9o.js";import"./Table-BCCPtXPw.js";import"./index-DBgsNfjF.js";import"./Dialog-BGDE9Lmz.js";import"./cross-Dvh7Mb4q.js";import"./svgIconContainer-xI7GONU5.js";import"./useBaseUiId-ONC8Xt4g.js";import"./InternalBackdrop-IX1U8kwf.js";import"./composite-dd7jjZk4.js";import"./index-dtUyYAkL.js";import"./index-B2p2pg25.js";import"./index-CB1zNyDM.js";import"./useEventCallback-nN2qNTIn.js";import"./SkeletonBar-CQ0QNmxu.js";import"./LoadingCell-tcz8ADSH.js";import"./ColumnConfigDialog-BCPHsvLd.js";import"./DraggableList-Bbsa4S8M.js";import"./search-D050E2Ix.js";import"./Input-9OWE4hHY.js";import"./useControlled-qOz3lv_a.js";import"./Button-BSyutd6a.js";import"./small-cross-DG1zTSDP.js";import"./ActionButton-CLh4iGOc.js";import"./Checkbox-BsxvVU3e.js";import"./useValueChanged-ClwG0cRJ.js";import"./CollapsiblePanel-qk7TdI5O.js";import"./MultiColumnSortDialog-kJmtx_MZ.js";import"./MenuTrigger-Hn15FCcY.js";import"./CompositeItem-CUKWIiHk.js";import"./ToolbarRootContext-BhpmgE0w.js";import"./getDisabledMountTransitionStyles-CB7sZ96x.js";import"./getPseudoElementBounds-CqcAX_hh.js";import"./chevron-down-kPE5lOM8.js";import"./index-CGnRKytQ.js";import"./error-C-IGdotI.js";import"./BaseCbacBanner-B-l4fz7l.js";import"./makeExternalStore-DGayjJTu.js";import"./Tooltip-CT9sU2PZ.js";import"./PopoverPopup-DZltGoWp.js";import"./debounce-Bu5YTwKq.js";import"./useOsdkClient-D0YYFk-l.js";import"./tick-BTtRE0Kk.js";import"./DropdownField-bcPFxJTG.js";import"./isEqual-BXIGuTbA.js";import"./withOsdkMetrics-B-pgZqiw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
