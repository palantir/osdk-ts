import{j as i}from"./iframe-CnFdBl-W.js";import{O as p}from"./object-table-B4sXouVB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DVQzNwTy.js";import"./preload-helper-D0VrPXX4.js";import"./Table-BCdm6SW9.js";import"./index-C7QX7sqh.js";import"./Dialog-cgPcTj2J.js";import"./cross-C0CFi2LA.js";import"./svgIconContainer-BH-fJV0L.js";import"./useBaseUiId-Db0ciCX6.js";import"./InternalBackdrop-DXjwxVqq.js";import"./composite-Bchd3j-K.js";import"./index-D-ULFZnm.js";import"./index-CVfyo-vI.js";import"./index-0fNVrXhf.js";import"./useEventCallback-qSmw8efB.js";import"./SkeletonBar-BdOFoRrQ.js";import"./LoadingCell-BLzyjQA-.js";import"./ColumnConfigDialog-FZGCYRdi.js";import"./DraggableList-Db-KWUP4.js";import"./search-BZ3zzvB7.js";import"./Input-DbDF9B3g.js";import"./useControlled-q9_B02Xu.js";import"./Button-CliHRcLl.js";import"./small-cross-CNTpTYNR.js";import"./ActionButton-f_QMANPB.js";import"./Checkbox-DuI53iNm.js";import"./useValueChanged-B9ALwysi.js";import"./CollapsiblePanel-DABG9C5U.js";import"./MultiColumnSortDialog-Sb3fOS37.js";import"./MenuTrigger-4FjSbfAn.js";import"./CompositeItem-ZV7LMbWM.js";import"./ToolbarRootContext-CpYHpTj-.js";import"./getDisabledMountTransitionStyles-BZKarr_8.js";import"./getPseudoElementBounds-k-pDzgEw.js";import"./chevron-down-CQGtY8nv.js";import"./index-CkqoLo0V.js";import"./error-CB_FjmA0.js";import"./BaseCbacBanner-YRlLrGPK.js";import"./makeExternalStore-BjBU5_-l.js";import"./Tooltip-q-GVrgqN.js";import"./PopoverPopup-BDYpDFDK.js";import"./debounce-BYgZD2VZ.js";import"./useOsdkClient-BhwDdzh_.js";import"./tick-n1UZaFr7.js";import"./DropdownField-DWV1mCKe.js";import"./isEqual-DIsBPJHu.js";import"./withOsdkMetrics-DiZaeAo8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
