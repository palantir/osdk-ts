import{j as i}from"./iframe-CVTk1lj6.js";import{O as p}from"./object-table-DeY0TTvR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-8rq3ipNA.js";import"./preload-helper-Ch_NUblH.js";import"./Table-DjIqmaqB.js";import"./index-Ca2wp4d3.js";import"./Dialog-D6kqFDaT.js";import"./cross-Dl6Djxwv.js";import"./svgIconContainer-BlxLcGWd.js";import"./useBaseUiId-ChhYdebi.js";import"./InternalBackdrop-Bx1r6uX2.js";import"./composite-CaJc-JUa.js";import"./index-D-pc5yxy.js";import"./index-B2mOMAcR.js";import"./index-DqbUxBef.js";import"./useEventCallback-2fHMqE-X.js";import"./SkeletonBar-9hrTtidV.js";import"./LoadingCell-DbYz7K5S.js";import"./ColumnConfigDialog-DMAdkIvV.js";import"./DraggableList-DxwabyCC.js";import"./search-Cr_k9lr1.js";import"./Input-DUWZnL0B.js";import"./useControlled-7LT5KU92.js";import"./Button-B65aTlIJ.js";import"./small-cross-q8kmKQY9.js";import"./ActionButton-D9pZWND8.js";import"./Checkbox-CJIwABxG.js";import"./useValueChanged-D4uMe9lc.js";import"./CollapsiblePanel-DLLCHJa6.js";import"./MultiColumnSortDialog-CK_2OU68.js";import"./MenuTrigger-C6jc1bQz.js";import"./CompositeItem-CwoHKheb.js";import"./ToolbarRootContext-Bdz2jmkC.js";import"./getDisabledMountTransitionStyles-CrlG27jh.js";import"./getPseudoElementBounds-CexEIoIE.js";import"./chevron-down-DNy2-Jwx.js";import"./index-B9pgwjc0.js";import"./error-DD1GLIG6.js";import"./BaseCbacBanner-CvmD8xvD.js";import"./makeExternalStore-BoZqRL7K.js";import"./Tooltip-B6hZPcYj.js";import"./PopoverPopup-KhpH8XWr.js";import"./debounce-DgMBLlid.js";import"./useOsdkClient-BHkZYH7e.js";import"./tick-tvKtyq-H.js";import"./DropdownField-WGqgGQOQ.js";import"./isEqual-BXFDGQEx.js";import"./withOsdkMetrics-COaPxDqK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
