import{j as i}from"./iframe-D8OemlW9.js";import{O as p}from"./object-table-CijJklQ8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BsGuK2Ev.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C63OMMoY.js";import"./index-CiF4zylQ.js";import"./Dialog-BjkAmFh4.js";import"./cross-DpXB_Ps1.js";import"./svgIconContainer-BU7OxppY.js";import"./useBaseUiId-Bh3moove.js";import"./InternalBackdrop-BF88OrKs.js";import"./composite-BBE6Lj1u.js";import"./index-CPBLZVtg.js";import"./index-tbQAWs3B.js";import"./index-BBRJlR8B.js";import"./useEventCallback-BbiqIkkJ.js";import"./SkeletonBar-CC0n8ZoQ.js";import"./LoadingCell-DzbbgWn1.js";import"./ColumnConfigDialog-ueTvAbkU.js";import"./DraggableList-CgKQoc-e.js";import"./search-7u3ddEhN.js";import"./Input-CGLEj01j.js";import"./useControlled-C4eqeGIw.js";import"./isEqual-B1bTncD3.js";import"./isObject-DNycWRhs.js";import"./Button-BaF7ht4j.js";import"./ActionButton-CkoeN1pa.js";import"./Checkbox-i_5tznLe.js";import"./useValueChanged-DUWzN1g_.js";import"./CollapsiblePanel-GdDFCM0d.js";import"./MultiColumnSortDialog-BJZGOxxf.js";import"./MenuTrigger-BPEoXRuf.js";import"./CompositeItem-DZtRWtLO.js";import"./ToolbarRootContext-FqIVkw-A.js";import"./getDisabledMountTransitionStyles-B4hVK4i0.js";import"./getPseudoElementBounds-W-ok6oZ5.js";import"./chevron-down-yj-Bk-PK.js";import"./index-DcTul6uP.js";import"./error-B7GqCXyt.js";import"./BaseCbacBanner-DF1DQmum.js";import"./makeExternalStore-DrpoL1n0.js";import"./Tooltip-j0H6DC9r.js";import"./PopoverPopup-DZ4-fkZw.js";import"./toNumber-JxYKBDCm.js";import"./useOsdkClient-BpAeP9F7.js";import"./tick-D6yWpjCG.js";import"./DropdownField-v9OtvE1M.js";import"./withOsdkMetrics-xS-Om8wD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
